import React, { createContext, ReactNode, useContext } from 'react';

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

import * as AuthSession from 'expo-auth-session';
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
}

interface AuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const user = {
    id: '23',
    name: 'Roberto',
    email: 'roberto.fortes23@gmail.com',
  };

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
      }
    } catch (error) {
      throw new Error(String(error));
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
