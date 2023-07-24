// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdx32RyoJqEVxF421qsAGi_Hh-S7McjRY",
  authDomain: "ema-jhone-auth-9f0a7.firebaseapp.com",
  projectId: "ema-jhone-auth-9f0a7",
  storageBucket: "ema-jhone-auth-9f0a7.appspot.com",
  messagingSenderId: "401502080716",
  appId: "1:401502080716:web:c2321b0d3adfff9a9a7c69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app