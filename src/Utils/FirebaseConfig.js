// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhrOy1FKGwhkRvYHVdAnAH9Km3ToQjPt4",
  authDomain: "dr-ruben-rajakumar.firebaseapp.com",
  projectId: "dr-ruben-rajakumar",
  storageBucket: "dr-ruben-rajakumar.appspot.com",
  messagingSenderId: "1086230770861",
  appId: "1:1086230770861:web:b566e18f1156ea53f3c224",
  measurementId: "G-VN083P675K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
