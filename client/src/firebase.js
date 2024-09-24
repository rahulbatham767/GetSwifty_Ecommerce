// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_yvYTPWxRaBrpiMe3THuVmQOdgHwMCcY",
  authDomain: "get-swifty-71469.firebaseapp.com",
  projectId: "get-swifty-71469",
  storageBucket: "get-swifty-71469.appspot.com",
  messagingSenderId: "355145483481",
  appId: "1:355145483481:web:b6c62b1e55cd594f6f6ac8",
  measurementId: "G-5J4SEZCND4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
