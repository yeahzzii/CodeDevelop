import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNW-gxr4fK5_5uRhoB47_YmLQu1r7ru48",
  authDomain: "nwitter-reloaded-93d00.firebaseapp.com",
  projectId: "nwitter-reloaded-93d00",
  storageBucket: "nwitter-reloaded-93d00.appspot.com",
  messagingSenderId: "56104416322",
  appId: "1:56104416322:web:2c1142423a04ff3f75a9db"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);