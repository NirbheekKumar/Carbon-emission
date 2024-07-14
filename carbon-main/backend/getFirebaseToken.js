const firebase = require('firebase/compat/app');
require('firebase/compat/auth');
const firebaseConfig = {

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
