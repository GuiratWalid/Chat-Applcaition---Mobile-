// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import app from "firebase/compat/app";
import "firebase/compat/auth";
//import initfirebase from './index';
import "firebase/compat/database";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeP3lt9oLs0AiOV8I14mW0QokdsL4m6no",
  authDomain: "chat-app-e0631.firebaseapp.com",
  databaseURL: "https://chat-app-e0631-default-rtdb.firebaseio.com",
  projectId: "chat-app-e0631",
  storageBucket: "chat-app-e0631.appspot.com",
  messagingSenderId: "54009546773",
  appId: "1:54009546773:web:adcf92a1834c20df24a61c",
  measurementId: "G-FS8C5Z4TQD"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const initfirebase = app.initializeApp(firebaseConfig);
export default initfirebase;