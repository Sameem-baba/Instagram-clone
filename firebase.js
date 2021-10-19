import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChiXweoICBxsk33KRwy4cDWkLc7PCtw7Y",
  authDomain: "instagram-clone-3629f.firebaseapp.com",
  projectId: "instagram-clone-3629f",
  storageBucket: "instagram-clone-3629f.appspot.com",
  messagingSenderId: "578465881513",
  appId: "1:578465881513:web:0af23bce4b5312a3cff8b8",
  measurementId: "G-CLJXQ3FXGH"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
