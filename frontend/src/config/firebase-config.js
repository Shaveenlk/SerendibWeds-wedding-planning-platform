// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYX-eZ450aECEeDSckmTRjwuT_s3DCycI",
  authDomain: "serendibwed.firebaseapp.com",
  projectId: "serendibwed",
  storageBucket: "serendibwed.appspot.com",
  messagingSenderId: "668515087433",
  appId: "1:668515087433:web:9703a0e9baa5df614bfb98",
  measurementId: "G-D18PPM5WLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default getAuth(app);


