// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnFA5x_LvuP7nhGQ787M-ubDqtvGmTDIk",
  authDomain: "loginfrom-525ec.firebaseapp.com",
  projectId: "loginfrom-525ec",
  storageBucket: "loginfrom-525ec.firebasestorage.app",
  messagingSenderId: "379828205280",
  appId: "1:379828205280:web:540e8d9ed7e101e25e0285",
  measurementId: "G-TB59KJEVGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
