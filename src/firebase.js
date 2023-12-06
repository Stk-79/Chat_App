import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwHyn4wuyyROXFUKayLz_rwr15T-ND8Ng",
  authDomain: "chat-71d05.firebaseapp.com",
  projectId: "chat-71d05",
  storageBucket: "chat-71d05.appspot.com",
  messagingSenderId: "597608971823",
  appId: "1:597608971823:web:6e2f6946558d3c836590da",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
