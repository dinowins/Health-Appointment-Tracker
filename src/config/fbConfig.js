import firebase from 'firebase/app'
import 'firebase/firestore'
// import 'import firebase/auth'

// Initialize Firebase

var config = {
  apiKey: "AIzaSyAKyHPxEXpzO5DtANfqZkGqxxB-XYrGCKw",
  authDomain: "health-appointment-tracker.firebaseapp.com",
  databaseURL: "https://health-appointment-tracker.firebaseio.com",
  projectId: "health-appointment-tracker",
  storageBucket: "health-appointment-tracker.appspot.com",
  messagingSenderId: "528801567567"
};

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase; 