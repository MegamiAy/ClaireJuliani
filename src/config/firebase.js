import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyChMOP2nhKhy-WBg-8KFhutBT67F45FAfc",

  authDomain: "claire-61fa2.firebaseapp.com",

  projectId: "claire-61fa2",

  storageBucket: "claire-61fa2.appspot.com",

  messagingSenderId: "55752456465",

  appId: "1:55752456465:web:022b339d7b1fce0211b4b0"

};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);