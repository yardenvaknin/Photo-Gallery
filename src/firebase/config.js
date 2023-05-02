
import { initializeApp } from "firebase/app";
import { getFirestore, /*FieldValue*/Timestamp } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getStorage} from "firebase/storage";


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNO7fuC8CHUPVmYEH_YFpjnYmfojOEdp4",
  authDomain: "yarden-firegram.firebaseapp.com",
  projectId: "yarden-firegram",
  storageBucket: "yarden-firegram.appspot.com",
  messagingSenderId: "1066158892049",
  appId: "1:1066158892049:web:eb777f8a259ef1b85ebdb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
// initialize this way ^^^
export const googleAuthProvider = new GoogleAuthProvider();

const projectStorage = getStorage();
const projectFireStore = getFirestore();
const timestamp = Timestamp.now();


export { projectStorage, projectFireStore, timestamp};

