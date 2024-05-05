import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsKEeW2zzHhAxpMdSrRlZr0PrkTEySDxA",
  authDomain: "shubham-8826f.firebaseapp.com",
  databaseURL: "https://shubham-8826f-default-rtdb.firebaseio.com",
  projectId: "shubham-8826f",
  storageBucket: "shubham-8826f.appspot.com",
  messagingSenderId: "142171450305",
  appId: "1:142171450305:web:fba252c8ef14edeaaadd40",
  measurementId: "G-WJS7EBT78R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);
export{app,auth};