import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

import * as AuthSession from 'expo-auth-session';
import * as AppleAuthentication from 'expo-apple-authentication';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthSessionResult } from 'expo-auth-session';

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface IAuthContextData {
  user: User;
  signInWithGoogle(): Promise<void>;
  signInWithApple(): Promise<void>;
  signOut(): Promise<void>;
  userStorageLoading: boolean;
}

interface AuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

const userData = {
  id: '23',
  name: 'Roberto',
  email: 'roberto.fortes23@gmail.com',
  photo: 'https://github.com/robertofortes23.png',
};

const AuthContext = createContext({} as IAuthContextData);

const [user, setUser] = useState<User>(userData as User);
const [userStorageLoading, setUserStorageLoading] = useState(true);

function AuthProvider({ children }: AuthProviderProps) {
  const userStorageKey = '@rgfgofinances:user';

  async function signInWithGoogle() {
    try {
      const RESPONSE_TYPE = '';
      const SCOPE = '';

      const authUrl = '';

      const { type, params } = AuthSession.startAsync({
        authUrl,
      }) as AuthorizationResponse & Promise<AuthSessionResult>;

      if (type === 'success') {
        const response = await fetch('');
        const userInfo = await response.json();

        setUser({
          id: userInfo.id,
          name: userInfo.name,
          email: userInfo.email,
          photo: userInfo.picture,
        });
      }
    } catch (error) {
      throw new Error(String(error));
    }
  }

  async function signInWithApple() {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      if (credential) {
        const userLogged = {
          id: String(credential.user),
          name: credential.fullName!.givenName!,
          email: credential.email!,
          photo: ` https://ui-avatars.com/api/?name=${credential.fullName!
            .givenName!}&length=1`,
        };
        setUser(userLogged);
        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));
      }
    } catch (error) {}
  }

  async function signOut() {
    setUser({} as User);
    await AsyncStorage.removeItem(userStorageKey);
  }

  useEffect(() => {
    async function loadUserStorageDate() {
      const userStoraged = await AsyncStorage.getItem(userStorageKey);

      if (userStoraged) {
        const userLogged = JSON.parse(userStoraged) as User;
        setUser(userLogged);
      }
      setUserStorageLoading(false);
    }

    loadUserStorageDate();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signInWithGoogle, signInWithApple, signOut, userStorageLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
