import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCZI5i25t6XMMAKee_O8gurszTLp5ByxOg",
  authDomain: "petadopt-99ac4.firebaseapp.com",
  projectId: "petadopt-99ac4",
  storageBucket: "petadopt-99ac4.appspot.com",
  messagingSenderId: "401365288890",
  appId: "1:401365288890:web:dfb4cc81bd68e59ba13f83",
  measurementId: "G-M84HXZL8K8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
