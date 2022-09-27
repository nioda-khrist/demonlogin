import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

// your firebase config here
const firebaseConfig = {
  apiKey: 'AIzaSyBbz-XHNDVLFeL3Uw2ms3ssQ6HbkCJ9j8g',
  authDomain: 'web-shop-c622f.firebaseapp.com',
  databaseURL: 'https://web-shop-c622f.firebaseio.com',
  projectId: 'web-shop-c622f',
  storageBucket: 'web-shop-c622f.appspot.com',
  messagingSenderId: '817181493992',
  appId: '1:817181493992:web:e104168615c9a80e91d75d',
};

//init firebase app
initializeApp(firebaseConfig);

//init services
const auth = getAuth();

export {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};
