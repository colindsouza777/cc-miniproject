  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/storage'
  import 'firebase/auth'

  const config = {
    // Firebase credentials
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  

  export default firebase;