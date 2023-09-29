// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHCvK0KAN1P8BpYdov95os1aBVOlEENz8",
    authDomain: "simple-firebase-first-pr-b53ba.firebaseapp.com",
    projectId: "simple-firebase-first-pr-b53ba",
    storageBucket: "simple-firebase-first-pr-b53ba.appspot.com",
    messagingSenderId: "1078750651705",
    appId: "1:1078750651705:web:6fcb667de110fe2d3cf4e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;