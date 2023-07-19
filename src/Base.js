
import { initializeApp } from "firebase/app";

import { getFirestore} from 'firebase/firestore/lite';

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkA5hP8utW5-c1xhkaAUnaSxSoIR50L-8",
  authDomain: "todo-auth-e5e98.firebaseapp.com",
  projectId: "todo-auth-e5e98",
  storageBucket: "todo-auth-e5e98.appspot.com",
  messagingSenderId: "931893597287",
  appId: "1:931893597287:web:8b02ad14d45ac15d41f0c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)