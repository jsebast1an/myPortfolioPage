// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxDb2CUDfYA7UsUURvFEptoE5K93FMK_U",
  authDomain: "react-portfolio-9132d.firebaseapp.com",
  projectId: "react-portfolio-9132d",
  storageBucket: "react-portfolio-9132d.appspot.com",
  messagingSenderId: "528453460405",
  appId: "1:528453460405:web:c1e6c80a74f9067c8139fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const dbFirestore = getFirestore(app)

export {dbFirestore}