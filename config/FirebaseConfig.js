// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "calenda-meet.firebaseapp.com",
  projectId: "calenda-meet",
  storageBucket: "calenda-meet.appspot.com",
  messagingSenderId: "645166999469",
  appId: "1:645166999469:web:baaab92342ee93e6d66324",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
