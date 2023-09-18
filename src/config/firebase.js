import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyChMOP2nhKhy-WBg-8KFhutBT67F45FAfc",

  authDomain: "claire-61fa2.firebaseapp.com",

  projectId: "claire-61fa2",

  storageBucket: "claire-61fa2.appspot.com",

  messagingSenderId: "55752456465",

  appId: "1:55752456465:web:022b339d7b1fce0211b4b0"

};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(app);
