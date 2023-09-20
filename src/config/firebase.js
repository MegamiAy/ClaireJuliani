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

<<<<<<< HEAD
<<<<<<< HEAD
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
=======
=======
>>>>>>> 8ebf7633d4f4dd7d732cd39216e493775c90f84c
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(app);
<<<<<<< HEAD
>>>>>>> 39ab1d615eef078c1ac66797970849ee9f8c7883
=======
>>>>>>> 8ebf7633d4f4dd7d732cd39216e493775c90f84c
