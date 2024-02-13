// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUsYwsmOX-fO-2N1KFKOVcjqUvnY3KmwE",
  authDomain: "serendibwedsauth.firebaseapp.com",
  projectId: "serendibwedsauth",
  storageBucket: "serendibwedsauth.appspot.com",
  messagingSenderId: "814608017340",
  appId: "1:814608017340:web:381ee90409ca9147c06db9",
  measurementId: "G-0TTMWVNQN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default getAuth(app);


