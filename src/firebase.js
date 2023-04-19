// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAeUMQiuRFOgqi5POX0AN6Z9Wf-1IGrpsY",
  authDomain: "practice-5f193.firebaseapp.com",
  projectId: "practice-5f193",
  storageBucket: "practice-5f193.appspot.com",
  messagingSenderId: "382230214888",
  appId: "1:382230214888:web:5cca5cd0276916196eb15d",
  measurementId: "G-RMRYEEQ9DT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const firestore = getFirestore(app);

export { auth, provider, firestore };


