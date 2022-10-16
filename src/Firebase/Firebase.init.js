import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaa0OYAXT3mD3kMHXL7rh9W-o-EXJd290",
  authDomain: "emajohn-firebase-authn.firebaseapp.com",
  projectId: "emajohn-firebase-authn",
  storageBucket: "emajohn-firebase-authn.appspot.com",
  messagingSenderId: "494456653251",
  appId: "1:494456653251:web:2f289ce641d0779be16976"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;