import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeFirestore } from 'firebase/firestore';

// import { getAnalytics } from 'firebase/analytics';

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_APIKEY,
//   authDomain: process.env.FIREBASE_AUTHDOMAIN,
//   projectId: process.env.FIREBASE_PROJECTID,
//   storageBucket: process.env.FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
//   appId: process.env.FIREBASE_APPID,
//   measurementId: process.env.FIREBASE_MEASUREMENTID,
// };


const firebaseConfig = {
  apiKey: "AIzaSyCZYZPbnZhlKJCGlp3li0OYupVFoOarqjo",
  authDomain: "reypato-73ec0.firebaseapp.com",
  projectId: "reypato-73ec0",
  storageBucket: "reypato-73ec0.appspot.com",
  messagingSenderId: "899810720696",
  appId: "1:899810720696:web:4901f46f40ef24e6b9ed4d",
  measurementId: "G-SV5C8J6NM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
// const analytics = getAnalytics(app);
export { db };
