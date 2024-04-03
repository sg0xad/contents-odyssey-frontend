// src/Firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAT1cqC5XdJo1ovwowcjl5ITftRjZ1I88Y",
    authDomain: "contents-odyssey.firebaseapp.com",
    projectId: "contents-odyssey",
    storageBucket: "contents-odyssey.appspot.com",
    messagingSenderId: "30067068406",
    appId: "1:30067068406:web:934de728a1ed04c6d94bd7",
    measurementId: "G-ZL4WLYXNYG"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
export const storage = getStorage()
export default app