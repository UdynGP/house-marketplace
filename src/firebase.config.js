import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBsNdtAsfukb-8Xe-MokojP8eXxJxeMXG0',
  authDomain: 'house-marketplace-c3395.firebaseapp.com',
  projectId: 'house-marketplace-c3395',
  storageBucket: 'house-marketplace-c3395.appspot.com',
  messagingSenderId: '860861920301',
  appId: '1:860861920301:web:7f7713bdfce5047f8ef4a4',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
