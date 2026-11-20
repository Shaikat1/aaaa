// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSAoOytj4tm6y4r2-PEXGZR9Md9JsNeWg",
  authDomain: "social-event-authentication.firebaseapp.com",
  projectId: "social-event-authentication",
  storageBucket: "social-event-authentication.appspot.com",
  messagingSenderId: "343625084154",
  appId: "1:343625084154:web:a170308d6577d6f566ad43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
