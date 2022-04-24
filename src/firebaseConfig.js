  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/storage'
  import 'firebase/auth'

  const config = {
    // Manan
    // Fille in firebase credentials here
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  

  export default firebase;