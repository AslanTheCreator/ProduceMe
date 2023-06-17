// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDaGcfUhDHfPVdmi6XyHSdqNZsfdjNT6BI',
  authDomain: 'produceme-4d531.firebaseapp.com',
  projectId: 'produceme-4d531',
  storageBucket: 'produceme-4d531.appspot.com',
  messagingSenderId: '404268223541',
  appId: '1:404268223541:web:d027ffa5b99abdae45b57c',
  measurementId: 'G-G0NY8J56D9',
};

initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();
