// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const { 

  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID

} = getEnvironments();

// Your web app's Firebase configuration

// Dev prop
// const firebaseConfig = {
//   apiKey: "AIzaSyBNixKqGoEIfaBaSqruHurmNYhNYxAFM68",
//   authDomain: "react-course-73539.firebaseapp.com",
//   projectId: "react-course-73539",
//   storageBucket: "react-course-73539.appspot.com",
//   messagingSenderId: "968000109979",
//   appId: "1:968000109979:web:0c0792c9d2613f9d73b53e"
// };

// Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyBYkH1a6wAD3LwogjdUaboczAELghif5iQ",
//   authDomain: "react-course-testing-d3eef.firebaseapp.com",
//   projectId: "react-course-testing-d3eef",
//   storageBucket: "react-course-testing-d3eef.appspot.com",
//   messagingSenderId: "547057636722",
//   appId: "1:547057636722:web:3a133e4e8677fa1c59f9eb"
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);