import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from './useAuth';
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { getErrorMessage } from '../utils/Error';

interface IProfile {
  _id: string;
  displayName: string;
  photoUrl: string;
  docId: string;
}

export const useProfile = () => {
  const { user } = useAuth();

  const [profile, setProfile] = useState<IProfile>({} as IProfile);

  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      setIsLoading(true);

      try {
        const snapshot = await getDocs(
          query(collection(db, 'users'), where('_id', '==', user?.uid), limit(1)),
        );

        if (snapshot.empty) {
          setIsLoading(false);
          return;
        }

        const profile = snapshot.docs.map((d) => ({
          ...(d.data() as IProfile),
          docId: d.id,
        }))[0];

        setProfile(profile);
        setName(profile.displayName);
        setPhoto(profile.photoUrl);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        getErrorMessage(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfileData();
  }, [user?.uid]);

  const value = useMemo(
    () => ({
      profile,
      isLoading,
      setName,
      setPhoto,
      name,
      photo,
    }),
    [profile, isLoading, setName, setPhoto, name, photo],
  );
  return value;
};
