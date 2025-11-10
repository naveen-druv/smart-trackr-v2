// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBVYbz3iacIcRdX7XsjcXeQwsidq__fVJU',
  authDomain: 'smart-trackr-52735.firebaseapp.com',
  projectId: 'smart-trackr-52735',
  storageBucket: 'smart-trackr-52735.firebasestorage.app',
  messagingSenderId: '941199351255',
  appId: '1:941199351255:web:04177cd12892ca91a67f92',
  measurementId: 'G-ED7DWN7PTY',
};

// Initialize Firebase
export const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firebaseAuth: Auth = getAuth(firebaseApp);
export const firestoreDb: Firestore = getFirestore(firebaseApp);
