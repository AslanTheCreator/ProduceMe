import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from './useAuth';
import { collection, limit, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';

interface IProfile {
  _id: string;
  displayName: string;
  avatar: string;
  docId: string;
}

export const useProfile = () => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState<IProfile>({} as IProfile);
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'users'), where('_id', '==', user?.uid), limit(1)),
        (snapshot) => {
          const profile = snapshot.docs.map((d) => ({
            ...(d.data() as IProfile),
            docId: d.id,
          }))[0];

          setProfile(profile);
          setName(profile.displayName);
          setAvatar(profile.avatar);
          setIsLoading(false);
        },
      ),
    [],
  );

  const value = useMemo(
    () => ({
      profile,
      isLoading,
      setName,
      setAvatar,
      name,
      avatar,
    }),
    [],
  );
  return value;
};
