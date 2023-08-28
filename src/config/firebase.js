import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDy6wbC1Xvr3AN7w1K-hZiqiykVQHwo69I",
  authDomain: "gabinsta-27a44.firebaseapp.com",
  projectId: "gabinsta-27a44",
  storageBucket: "gabinsta-27a44.appspot.com",
  messagingSenderId: "879492394717",
  appId: "1:879492394717:web:da94d666af95d1c7d6b534"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);