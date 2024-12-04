// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpA1_U1kC78tQ_jb2MuK6Yv-TJ6nKrwos",
  authDomain: "accounting-app-d9755.firebaseapp.com",
  projectId: "accounting-app-d9755",
  storageBucket: "accounting-app-d9755.firebasestorage.app",
  messagingSenderId: "731063062148",
  appId: "1:731063062148:web:91bfe55cc6fbcb0067fcd1",
  measurementId: "G-3NZ1PFK2RY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth, analytics, app}
