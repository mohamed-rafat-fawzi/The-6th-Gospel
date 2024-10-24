// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLMEt1FV2l_nr5mKevFXLUwrvzdqFfSNQ",
  authDomain: "the-6th-gospel-14119.firebaseapp.com",
  databaseURL: "https://the-6th-gospel-14119-default-rtdb.firebaseio.com",
  projectId: "the-6th-gospel-14119",
  storageBucket: "the-6th-gospel-14119.appspot.com",
  messagingSenderId: "732466504603",
  appId: "1:732466504603:web:060b4e7f3703e65ac6773e",
  measurementId: "G-XJMXM6R92T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the app as the default export
export default app;
