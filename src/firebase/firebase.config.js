// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
require('dotenv').config()


const firebaseConfig = {
  apiKey: "AIzaSyBu_2MaoN1g-Lak-HbuP2DuWcdeaqnY22E",
  authDomain: "artisan-avenue.firebaseapp.com",
  projectId: "artisan-avenue",
  storageBucket: "artisan-avenue.appspot.com",
  messagingSenderId: "1044502561094",
  appId: "1:1044502561094:web:e4a99a0eba1d01ece2e547"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);