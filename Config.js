// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADQyJaEt575BrtPdqjPyElBX6aFTO-umQ",
  authDomain: "finapp-d53ad.firebaseapp.com",
  databaseURL: "https://finapp-d53ad-default-rtdb.firebaseio.com",
  projectId: "finapp-d53ad",
  storageBucket: "finapp-d53ad.firebasestorage.app",
  messagingSenderId: "66608487898",
  appId: "1:66608487898:web:0b070ee1d59eb65f6ff4e3",
  measurementId: "G-B358QF1H85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


