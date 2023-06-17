import { User, onAuthStateChanged } from 'firebase/auth';
import React, { FC, PropsWithChildren, createContext, useEffect, useMemo, useState } from 'react';
import { register, db, login, logout, auth } from '../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { getErrorMessage } from '../utils/Error';

interface IContext {
  user: User | null;
  isLoading: boolean;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [isLoading, setisLoading] = useState(false);

  const registerHandler = async (email: string, password: string) => {
    setisLoading(true);
    try {
      const { user } = await register(email, password);

      await addDoc(collection(db, 'users'), {
        _id: user.uid,
        displayName: 'No name',
      });
    } catch (error) {
      getErrorMessage(error);
    } finally {
      setisLoading(false);
    }
  };

  const loginHandler = async (email: string, password: string) => {
    setisLoading(true);
    try {
      await login(email, password);
    } catch (error) {
      getErrorMessage(error);
    } finally {
      setisLoading(false);
    }
  };

  const logoutHandler = async () => {
    setisLoading(true);
    try {
      await logout();
    } catch (error) {
      getErrorMessage(error);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user || null);
      setIsLoadingInitial(false);
    });
  }, []);

  const value = useMemo(
    () => ({
      user,
      isLoading,
      login: loginHandler,
      logout: logoutHandler,
      register: registerHandler,
    }),
    [user, isLoading],
  );

  return <AuthContext.Provider value={value}>{!isLoadingInitial && children}</AuthContext.Provider>;
};
