import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC5VGmYehUqxv8lK6iv98z7b99kg2Ql22E",
  authDomain: "youmeal-61c3d.firebaseapp.com",
  projectId: "youmeal-61c3d",
  storageBucket: "youmeal-61c3d.firebasestorage.app",
  messagingSenderId: "383157731",
  appId: "1:383157731:web:13a5fbcab1c90339ae8cd6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };