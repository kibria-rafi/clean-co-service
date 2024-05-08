
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsoLjS8iBZTgTdyOcuCGE45td-b33H6gs",
  authDomain: "simple-firebase-8ffdf.firebaseapp.com",
  projectId: "simple-firebase-8ffdf",
  storageBucket: "simple-firebase-8ffdf.appspot.com",
  messagingSenderId: "710473634611",
  appId: "1:710473634611:web:f539aeff0a9650c6036446"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;