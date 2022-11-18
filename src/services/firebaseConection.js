// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAMxYMY4Qlw14AYfF9NoZ28SoT4k4AP0pw",
  authDomain: "webpage-ebc92.firebaseapp.com",
  projectId: "webpage-ebc92",
  storageBucket: "webpage-ebc92.appspot.com",
  messagingSenderId: "1042465560025",
  appId: "1:1042465560025:web:90d599878b47ca1db035c8",
  measurementId: "G-SD79EDMFDH"
};


const firebaseapp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseapp)

const auth = getAuth(firebaseapp);

export {db, auth};