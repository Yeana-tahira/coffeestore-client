// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwaeTeBF3jj0DqbitWos-RRLrT0nV37E8",
  authDomain: "coffee-store-d89d6.firebaseapp.com",
  projectId: "coffee-store-d89d6",
  storageBucket: "coffee-store-d89d6.firebasestorage.app",
  messagingSenderId: "642110707515",
  appId: "1:642110707515:web:4144ffd211860ddfd2891e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);