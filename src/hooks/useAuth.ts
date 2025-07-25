import { useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useLocalStorageState<AuthState>('auth', {
    defaultValue: {
      user: null,
      isAuthenticated: false,
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=3b82f6&color=fff`,
      };

      setAuthState({
        user,
        isAuthenticated: true,
      });

      return { success: true };
    } catch (error) {
      return { success: false, error: 'Invalid credentials' };
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      // Simulate Google OAuth
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const user: User = {
        id: '1',
        email: 'user@gmail.com',
        name: 'Google User',
        avatar: 'https://ui-avatars.com/api/?name=Google+User&background=ea4335&color=fff',
      };

      setAuthState({
        user,
        isAuthenticated: true,
      });

      return { success: true };
    } catch (error) {
      return { success: false, error: 'Google login failed' };
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGitHub = async () => {
    setIsLoading(true);
    try {
      // Simulate GitHub OAuth
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const user: User = {
        id: '1',
        email: 'user@github.com',
        name: 'GitHub User',
        avatar: 'https://ui-avatars.com/api/?name=GitHub+User&background=24292e&color=fff',
      };

      setAuthState({
        user,
        isAuthenticated: true,
      });

      return { success: true };
    } catch (error) {
      return { success: false, error: 'GitHub login failed' };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user: User = {
        id: '1',
        email,
        name,
        avatar: `https://ui-avatars.com/api/?name=${name}&background=3b82f6&color=fff`,
      };

      setAuthState({
        user,
        isAuthenticated: true,
      });

      return { success: true };
    } catch (error) {
      return { success: false, error: 'Registration failed' };
    } finally {
      setIsLoading(false);
    }
  };

  const forgotPassword = async (email: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Failed to send reset email' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setAuthState({
      user: null,
      isAuthenticated: false,
    });
  };

  return {
    ...authState,
    isLoading,
    login,
    loginWithGoogle,
    loginWithGitHub,
    register,
    forgotPassword,
    logout,
  };
};