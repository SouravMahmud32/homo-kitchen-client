// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWNHfUBQlQOvOLASJj1wHPcIahHEO7T6I",
  authDomain: "homo-kitchen.firebaseapp.com",
  projectId: "homo-kitchen",
  storageBucket: "homo-kitchen.appspot.com",
  messagingSenderId: "294383922125",
  appId: "1:294383922125:web:c3e4d3aaf2bde3a1e8b284"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;