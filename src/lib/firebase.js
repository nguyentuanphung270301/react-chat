import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-694da.firebaseapp.com",
  projectId: "reactchat-694da",
  storageBucket: "reactchat-694da.appspot.com",
  messagingSenderId: "551514965821",
  appId: "1:551514965821:web:40e661d4fc8eb722546754"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
