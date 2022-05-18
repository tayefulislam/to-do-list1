import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEUCagqiCvvglbiJPbmZXFRxC5aVxhdlg",
    authDomain: "to-do-en.firebaseapp.com",
    projectId: "to-do-en",
    storageBucket: "to-do-en.appspot.com",
    messagingSenderId: "663310693209",
    appId: "1:663310693209:web:a3e3724f19ea6a3e1f1248"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)


export default auth;