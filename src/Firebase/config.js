// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  authDomain: "machine-test-54fbb.firebaseapp.com",
  projectId: "machine-test-54fbb",
  storageBucket: "machine-test-54fbb.appspot.com",
  messagingSenderId: "171361617720",
  appId: "1:171361617720:web:09162f53c8f35882d3e3cd",
};

const firebase = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(firebase);
export default firebase;
