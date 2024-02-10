import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIXde2UrekWgLNWX-Q9ZLb7KdOdtf00RE",
  authDomain: "basic-login-de996.firebaseapp.com",
  projectId: "basic-login-de996",
  storageBucket: "basic-login-de996.appspot.com",
  messagingSenderId: "320719798195",
  appId: "1:320719798195:web:482c828a49d92f638a55c6",
  measurementId: "G-XK0209L1NG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};