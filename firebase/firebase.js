// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRTfwN0ER0Sl-u4-_43b8oCh0xd_KE_rw",
    authDomain: "schedule-organizer-14fac.firebaseapp.com",
    projectId: "schedule-organizer-14fac",
    storageBucket: "schedule-organizer-14fac.appspot.com",
    messagingSenderId: "268004319041",
    appId: "1:268004319041:web:a45978f0e084f4a84bcbc0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
}