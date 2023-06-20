import { useState, useEffect } from 'react';
import { IFacts } from './types';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import { getErrorMessage } from '../../../utils/Error';

export const useFacts = () => {
  const [facts, setFacts] = useState<IFacts | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        //получение ссылки на документ 'facts'
        const docRef = doc(db, 'facts', 'xWgbyA6J8s6mNkFa7Dhi');
        const snapshot = await getDoc(docRef);
        setFacts(snapshot.data() as IFacts);
        setIsLoading(false);
      } catch (error) {
        getErrorMessage(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { facts, isLoading };
};
