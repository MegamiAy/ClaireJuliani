import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMFtnVd49kiuC66WWfDQcgP_G9wtz2imU",
  authDomain: "claire-1bba9.firebaseapp.com",
  projectId: "claire-1bba9",
  storageBucket: "claire-1bba9.appspot.com",
  messagingSenderId: "174879856976",
  appId: "1:174879856976:web:c828aa38b27335323f7455",
  measurementId: "G-E0W1M6ZM0G"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);