import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBz6XiYbHXVxSuwPJH3NHyi3-hSGMfz1d4",
  authDomain: "chatter-41d4e.firebaseapp.com",
  projectId: "chatter-41d4e",
  storageBucket: "chatter-41d4e.appspot.com",
  messagingSenderId: "808801341116",
  appId: "1:808801341116:web:1be18f74c8a7d0f35c8ab9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
