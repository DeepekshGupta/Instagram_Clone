// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// require('dotenv').config();
// import 'dotenv/config' 

// const firebaseConfig = {
//   apiKey            : process.env.REACT_APP_apiKey,
//   authDomain        : process.env.REACT_APP_authDomain,
//   projectId         : process.env.REACT_APP_projectId,
//   storageBucket     : process.env.REACT_APP_storageBucket,
//   messagingSenderId : process.env.REACT_APP_messagingSenderId,
//   appId             : process.env.REACT_APP_appId,
//   measurementId     : process.env.REACT_APP_measurementId
// };

const firebaseConfig = {
  apiKey: "AIzaSyDLjhW3Ql_wUu6iZfZ1wFy5hDYvVjm0bLU",
  authDomain: "instaclone-react-e504c.firebaseapp.com",
  projectId: "instaclone-react-e504c",
  storageBucket: "instaclone-react-e504c.appspot.com",
  messagingSenderId: "256203631680",
  appId: "1:256203631680:web:6fc1dbbaffc3a30b04c3a5",
  measurementId: "G-KWTN4NCS08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export {db}

