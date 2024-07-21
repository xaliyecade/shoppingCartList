// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8Z85UCvryNyTTAmoCUOuDF-H1p7Pu1j4",
    authDomain: "shopping-cart-list-243f5.firebaseapp.com",
    projectId: "shopping-cart-list-243f5",
    storageBucket: "shopping-cart-list-243f5.appspot.com",
    messagingSenderId: "26235334873",
    appId: "1:26235334873:web:803d00cda3cdda0eedcec8",
    measurementId: "G-WMGJHYWMB9"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
