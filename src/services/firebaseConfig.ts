import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAC_ywYpaaiSOHn_uv5nI-VcI2C3pwpxJ0",
  authDomain: "phutho-tourist.firebaseapp.com",
  projectId: "phutho-tourist",
  storageBucket: "phutho-tourist.appspot.com",
  messagingSenderId: "631592215487",
  appId: "1:631592215487:web:60791166fd07fd9b3f770a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAfJz4UjTDSIHkPQMNAYdfa57aDNJZdr5o",
//   authDomain: "curd-10cef.firebaseapp.com",
//   projectId: "curd-10cef",
//   storageBucket: "curd-10cef.appspot.com",
//   messagingSenderId: "1039995209324",
//   appId: "1:1039995209324:web:a68a2fe66e6608ad5afa49",
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

// export const db = firebase.firestore(app);
