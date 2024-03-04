// place files you want to import through the `$lib` alias in this folder.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
export var database;


  if (typeof window !== 'undefined')
  {
    // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfECRJ5a6BRZS2ut9gCG061WinluJOHcI",
  authDomain: "hoth-11.firebaseapp.com",
  projectId: "hoth-11",
  storageBucket: "hoth-11.appspot.com",
  messagingSenderId: "948755546362",
  appId: "1:948755546362:web:f8dfc62c92bf610bc6c943",
  measurementId: "G-80GF47QQLX"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
database = getDatabase(app);
  }
/*function writeUserData(userId, data) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), data);
  }
  }
  **/