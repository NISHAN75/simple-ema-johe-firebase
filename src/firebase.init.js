// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoOtDMgZUeY892nK_HSLOiOuA-ZkN6CYQ",
  authDomain: "ema-john-simple-21542.firebaseapp.com",
  projectId: "ema-john-simple-21542",
  storageBucket: "ema-john-simple-21542.appspot.com",
  messagingSenderId: "269482503214",
  appId: "1:269482503214:web:734911d435b2a2978783bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth;