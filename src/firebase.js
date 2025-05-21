// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuNSRY2fxWJujedGR7upyp3b_GHG2c7lA",
  authDomain: "inha-46136.firebaseapp.com",
  projectId: "inha-46136",
  storageBucket: "inha-46136.firebasestorage.app",
  messagingSenderId: "533804388879",
  appId: "1:533804388879:web:c8bfc7513927d87d46897a",
  measurementId: "G-C1PWWJV0PQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);