
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6rGGJV1vRbFDRiejtHa3FH43quVxv3Gw",
  authDomain: "task-mangement-1108b.firebaseapp.com",
  projectId: "task-mangement-1108b",
  storageBucket: "task-mangement-1108b.appspot.com",
  messagingSenderId: "139770917493",
  appId: "1:139770917493:web:c05bbb8c6f685fb83d3e3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;