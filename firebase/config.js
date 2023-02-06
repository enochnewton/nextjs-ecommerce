import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCVOmkrMd57_qjRd4dZcBZaJc-23a7-USQ",
  authDomain: "nextjs-ecommerce-7d3d2.firebaseapp.com",
  projectId: "nextjs-ecommerce-7d3d2",
  storageBucket: "nextjs-ecommerce-7d3d2.appspot.com",
  messagingSenderId: "741102860179",
  appId: "1:741102860179:web:82346c92124fe276621a66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
