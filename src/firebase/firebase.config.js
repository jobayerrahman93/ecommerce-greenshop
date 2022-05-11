import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA5vlWe9fB0xGgcaGigOlNjsYc77jag45c",
  authDomain: "green-shop-jobayerdevs.firebaseapp.com",
  projectId: "green-shop-jobayerdevs",
  storageBucket: "green-shop-jobayerdevs.appspot.com",
  messagingSenderId: "807597926136",
  appId: "1:807597926136:web:82c485877d6b6d124bfd0d"
};



const initialzeAuthentication=()=>{

initializeApp(firebaseConfig);
}

export default initialzeAuthentication;