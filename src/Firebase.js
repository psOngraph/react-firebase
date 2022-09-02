import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyDjJ_LXKdWXea4DUkbRezyBYCu6hZnxMJg",
  authDomain: "cafe-form-7540d.firebaseapp.com",
  projectId: "cafe-form-7540d",
  storageBucket: "cafe-form-7540d.appspot.com",
  messagingSenderId: "57116761783",
  appId: "1:57116761783:web:ee0e6643ca452934657732",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, addDoc };
