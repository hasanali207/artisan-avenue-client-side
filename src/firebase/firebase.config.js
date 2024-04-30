// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// require('dotenv').config(); // Load environment variables from .env file





const firebaseConfig = {
  apiKey: "AIzaSyAzmbJro2RdckCNsoJSkp-9Wem7HTMlrCM",
  authDomain: "artisan-avenue-fe34e.firebaseapp.com",
  projectId: "artisan-avenue-fe34e",
  storageBucket: "artisan-avenue-fe34e.appspot.com",
  messagingSenderId: "73330597114",
  appId: "1:73330597114:web:d0a04d6171be5010ad7d43"
};

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID
// };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);