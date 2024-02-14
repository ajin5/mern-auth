// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-20bd0.firebaseapp.com",
  projectId: "mern-auth-20bd0",
  storageBucket: "mern-auth-20bd0.appspot.com",
  messagingSenderId: "1026785955828",
  appId: "1:1026785955828:web:9d7769b07796b1fc35f3a1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
