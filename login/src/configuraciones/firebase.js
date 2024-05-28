import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVLs0I0UXNc3PZ4M7wscjrsQB1u2yEpHk",
  authDomain: "login-c2c55.firebaseapp.com",
  projectId: "login-c2c55",
  storageBucket: "login-c2c55.appspot.com",
  messagingSenderId: "120321981822",
  appId: "1:120321981822:web:a98a0952d83808db41872f",
  measurementId: "G-D6ZJPFC8G8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Initialize Firestore
const firestore = getFirestore(app);

export { auth, firestore };
