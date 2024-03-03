// place files you want to import through the `$lib` alias in this folder.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

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
const database = getDatabase(app);

function writeUserData(userId, q1, q2, q3, q4, q5, q6, q7) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      question_1: q1,
      question_2: q2,
      question_3: q3,
      question_4:q4,
      question_5:q5,
      question_6:q6,
      question_7:q7
    });
  }