// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFzoOZlk1fqVNrYPrFKGe8MW4exSDeqUI",
  authDomain: "docsclone-2d5c0.firebaseapp.com",
  projectId: "docsclone-2d5c0",
  storageBucket: "docsclone-2d5c0.firebasestorage.app",
  messagingSenderId: "1035938458123",
  appId: "1:1035938458123:web:16c8dfb783d5578d59b50e"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);