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
}

interface AuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

const AuthContext = createContext({} as IAuthContextData);

const [user, setUser] = useState<User>({} as User);
const [userStorageLoading, setUserStorageLoading] = useState(true);

function AuthProvider({ children }: AuthProviderProps) {
  const user = {
    id: '23',
    name: 'Roberto',
    email: 'roberto.fortes23@gmail.com',
  };

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
          photo: undefined,
        };
        setUser(userLogged);
        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));
      }
    } catch (error) {}
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
    <AuthContext.Provider value={{ user, signInWithGoogle, signInWithApple }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
