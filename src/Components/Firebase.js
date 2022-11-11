import "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD07T3FHJaenEs2DpSSS2xggLEwNdjybTg",
  authDomain: "peluqueria-stella.firebaseapp.com",
  projectId: "peluqueria-stella",
  storageBucket: "peluqueria-stella.appspot.com",
  messagingSenderId: "956303484600",
  appId: "1:956303484600:web:60ab76ac2d8a4ddf84764d",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
