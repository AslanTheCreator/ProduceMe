import React, { useState } from 'react';
import { useAuth } from './useAuth';
import { getErrorMessage } from '../utils/Error';
import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';

export const useUpdateProfile = (name: string, docId: string) => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateProfile = async () => {
    setIsLoading(true);

    if (!user) return;

    try {
      const docRef = doc(db, 'users', docId);
      await updateDoc(docRef, {
        displayName: name,
      });

      setIsSuccess(true);

      setTimeout(() => setIsLoading(false), 3000);
    } catch (error) {
      getErrorMessage(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, updateProfile, isSuccess };
};
