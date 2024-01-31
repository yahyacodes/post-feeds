import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAr1_Dy20XOWQECiq2CgQahMiFzG7vUTFc",
  authDomain: "react-to-do-6bf9e.firebaseapp.com",
  databaseURL: "https://react-to-do-6bf9e-default-rtdb.firebaseio.com",
  projectId: "react-to-do-6bf9e",
  storageBucket: "react-to-do-6bf9e.appspot.com",
  messagingSenderId: "55037387951",
  appId: "1:55037387951:web:2c079bea86a60118c6a05a",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
