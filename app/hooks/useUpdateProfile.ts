import React, { useState, useEffect } from 'react';
import { getErrorMessage } from '../utils/Error';
import { db } from '../firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';
import { useAuth } from './useAuth';

export const useUpdateProfile = (docId: string, name?: string, photo?: string) => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const updateProfile = async () => {
    console.log(photo, 'update profile');
    useEffect(() => {
      console.log(photo, 'updateProfile useEffect');
    }, [photo]);

    setIsLoading(true);

    if (!user) return;

    try {
      const docRef = doc(db, 'users', docId);

      await updateDoc(docRef, {
        displayName: name,
        photoUrl: photo,
      });

      setIsLoading(false);
    } catch (error) {
      getErrorMessage(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, updateProfile };
};
