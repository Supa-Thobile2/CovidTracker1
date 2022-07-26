// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-mSGwisR6k6a1kIRPh1vThSIi1H273XI",
  authDomain: "covid-tracker-app-5446d.firebaseapp.com",
  projectId: "covid-tracker-app-5446d",
  storageBucket: "covid-tracker-app-5446d.appspot.com",
  messagingSenderId: "782613737259",
  appId: "1:782613737259:web:68b24b177ec0966c489f6e",
  measurementId: "G-4309RXCJGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);