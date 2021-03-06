// Import the functions you need from the SDKs you need
import { firebaseConfig } from "./firebaseConfig";
import firebase from "firebase/compat";
import { getAuth } from "firebase/auth";
import { query, orderBy, doc, getDoc } from "firebase/firestore"; 
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = getAuth();
const storage = getStorage();
// const ref = storage.ref();

export {
    db,
    auth,
    storage,
    doc,
    getDoc,
    query,
    orderBy,
    ref,
    uploadBytes,
    getDownloadURL,
    listAll
};