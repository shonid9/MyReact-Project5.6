// src/contexts/AuthContext.tsx

import  { createContext, useContext, useState, ReactNode } from 'react';
import AuthService from '../Services/AuthServise';

interface AuthContextType {
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(AuthService.getToken());

  const login = async (email: string, password: string) => {
    const data = await AuthService.login(email, password);
    AuthService.saveToken(data.token);
    setToken(data.token);
  };

  const logout = () => {
    AuthService.logout();
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
