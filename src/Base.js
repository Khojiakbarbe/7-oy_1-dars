
import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5BCkpI5T9OuovIiJ5rmtH543Ou4DfArI",
  authDomain: "todo-2b96f.firebaseapp.com",
  projectId: "todo-2b96f",
  storageBucket: "todo-2b96f.appspot.com",
  messagingSenderId: "306282653062",
  appId: "1:306282653062:web:3345a1ba01c4cdbefa7807"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default  db