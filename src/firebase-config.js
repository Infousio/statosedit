// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { disableNetwork } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANqxmb7GDGjL-g8nnY7JJHoeH0LGNzRaM",
  authDomain: "keap-3e7fb.firebaseapp.com",
  projectId: "keap-3e7fb",
  storageBucket: "keap-3e7fb.appspot.com",
  messagingSenderId: "84425741467",
  appId: "1:84425741467:web:a2c2b724629cb4cec6223e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;