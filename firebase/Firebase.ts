
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyA6HYpH6LziKkfiC-GrwzGtYCw0QxdZ7LI",
  authDomain: "react-native-pizaa.firebaseapp.com",
  projectId: "react-native-pizaa",
  storageBucket: "react-native-pizaa.appspot.com",
  messagingSenderId: "1041675675564",
  appId: "1:1041675675564:web:be7e401caaea6cafb67c09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth };
  

