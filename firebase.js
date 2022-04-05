// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'uber-clone-6f6e0.firebaseapp.com',
  projectId: 'uber-clone-6f6e0',
  storageBucket: 'uber-clone-6f6e0.appspot.com',
  messagingSenderId: '133221026406',
  appId: '1:133221026406:web:8ff4cd786e61c7590f7ba7',
  measurementId: 'G-XJFJS20PFP',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
const auth = getAuth()
export { app, provider, auth }
