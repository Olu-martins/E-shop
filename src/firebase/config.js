import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


export const firebaseConfig = {
  apiKey: "AIzaSyCbQm7MVV3zDW0Sqsy3YFDW0Nz5TFoiSlU",
  authDomain: "eshop-b045b.firebaseapp.com",
  projectId: "eshop-b045b",
  storageBucket: "eshop-b045b.appspot.com",
  messagingSenderId: "412015309183",
  appId: "1:412015309183:web:fff0df6c3b758376c5ea4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export auths
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app