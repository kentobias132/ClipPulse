// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "clippulse-b2b6d.firebaseapp.com",
  projectId: "clippulse-b2b6d",
  storageBucket: "clippulse-b2b6d.appspot.com",
  messagingSenderId: "665316424090",
  appId: "1:665316424090:web:a63e963d238ae808ef2223",
  measurementId: "G-PTV03CD603",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
