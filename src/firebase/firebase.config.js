// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAzmbJro2RdckCNsoJSkp-9Wem7HTMlrCM",
  authDomain: "artisan-avenue-fe34e.firebaseapp.com",
  projectId: "artisan-avenue-fe34e",
  storageBucket: "artisan-avenue-fe34e.appspot.com",
  messagingSenderId: "73330597114",
  appId: "1:73330597114:web:d0a04d6171be5010ad7d43"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);