// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByjFZXCbb0mAABRWaMzCkIJj_XQGpJ0PQ",
  authDomain: "fir-globaldata.firebaseapp.com",
  projectId: "fir-globaldata",
  storageBucket: "fir-globaldata.appspot.com",
  messagingSenderId: "604685405706",
  appId: "1:604685405706:web:543c4ddb771a36c7fa59f3",
  measurementId: "G-968N9TMFEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

