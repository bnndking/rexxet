import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, fullName: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('rexxet_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login - replace with actual Supabase auth
    const mockUser: User = {
      id: '1',
      email,
      full_name: 'Demo User',
      subscription_status: 'trial',
      created_at: new Date().toISOString(),
    };
    setUser(mockUser);
    localStorage.setItem('rexxet_user', JSON.stringify(mockUser));
  };

  const signup = async (email: string, password: string, fullName: string) => {
    // Mock signup - replace with actual Supabase auth
    const mockUser: User = {
      id: '1',
      email,
      full_name: fullName,
      subscription_status: 'trial',
      created_at: new Date().toISOString(),
    };
    setUser(mockUser);
    localStorage.setItem('rexxet_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('rexxet_user');
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}