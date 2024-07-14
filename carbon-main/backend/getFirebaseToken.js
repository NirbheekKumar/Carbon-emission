const firebase = require('firebase/compat/app');
require('firebase/compat/auth');
const firebaseConfig = {
  apiKey: "AIzaSyA8PJjSqa4lXYrTTc8VLDT-jeDWMD0ppVI",
  authDomain: "carbon-b73c7.firebaseapp.com",
  projectId: "carbon-b73c7",
  storageBucket: "carbon-b73c7.appspot.com",
  messagingSenderId: "634596153004",
  appId: "1:634596153004:web:d8a208bbbed31036b43109",
  measurementId: "G-7X4C8LT453"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

async function getIdToken() {
  try {
    // Sign up a new user
    const userCredential = await firebase.auth().createUserWithEmailAndPassword('testuser@example.com', 'password123');
    const user = userCredential.user;

    // Get ID token
    const token = await user.getIdToken();
    console.log('Firebase ID Token:', token);

    // Return the token
    return token;
  } catch (error) {
    console.error('Error creating user or getting ID token:', error);
  }
}

getIdToken();
