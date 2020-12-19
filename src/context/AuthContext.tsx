import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface IAuthContext {
  name: string;
  signIn(credential: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    await api
      .post('sessions', { email, password })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Aldo', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
