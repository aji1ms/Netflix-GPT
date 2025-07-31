// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAunCXgiPocXrIZvDC7wfoVLJlL6heSZWw",
    authDomain: "netflixgpt-2c7b0.firebaseapp.com",
    projectId: "netflixgpt-2c7b0",
    storageBucket: "netflixgpt-2c7b0.firebasestorage.app",
    messagingSenderId: "400868375857",
    appId: "1:400868375857:web:f8b030f6719aa274940410",
    measurementId: "G-3264V24FKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();