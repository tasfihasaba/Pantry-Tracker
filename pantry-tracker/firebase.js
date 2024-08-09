// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgQwIpXwcPujY3UH5t1WDD43f0vqLPY_M",
  authDomain: "pantry-tracker1.firebaseapp.com",
  databaseURL: "https://pantry-tracker1-default-rtdb.firebaseio.com",
  projectId: "pantry-tracker1",
  storageBucket: "pantry-tracker1.appspot.com",
  messagingSenderId: "665261550426",
  appId: "1:665261550426:web:9ebaf6fe85da69af942163",
  measurementId: "G-MXM8Z2R7TT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);
export {app, firestore}