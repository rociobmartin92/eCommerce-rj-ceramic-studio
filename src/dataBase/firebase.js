// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGRe_eCH0DRa4WVHEdYRVKdoibsG-g77c",
  authDomain: "jrceramicstudio.firebaseapp.com",
  projectId: "jrceramicstudio",
  storageBucket: "jrceramicstudio.appspot.com",
  messagingSenderId: "167700246850",
  appId: "1:167700246850:web:2cb3f7cee251c05ec218db",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firebase_auth = getAuth(app);
