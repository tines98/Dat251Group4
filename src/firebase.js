// Import the functions you need from the SDKs you need
import { firebaseConfig } from "./firebaseConfig";
import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {
    db
};