import { useEffect, useState } from 'react';
import { ISport } from './types';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

export const useSport = () => {
  const [sport, setSport] = useState<ISport[]>([]);

  useEffect(() => {
    onSnapshot(query(collection(db, 'sport'), orderBy('title', 'asc')), (snapshot) => {
      setSport(
        snapshot.docs.map(
          (d) =>
            ({
              _id: d.id,
              ...d.data(),
            } as ISport),
        ),
      );
    });
  }, []);

  return { sport };
};
