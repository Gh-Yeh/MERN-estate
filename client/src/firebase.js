// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-817d4.firebaseapp.com",
  projectId: "mern-estate-817d4",
  storageBucket: "mern-estate-817d4.appspot.com",
  messagingSenderId: "262220459444",
  appId: "1:262220459444:web:058d09ce9e6056623016e1",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
