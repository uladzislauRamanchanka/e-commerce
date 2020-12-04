import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDFtVhjS8AvWwW4gUImD8fX0XiQ8lsD2Zk",
    authDomain: "crwn-db-5215a.firebaseapp.com",
    projectId: "crwn-db-5215a",
    storageBucket: "crwn-db-5215a.appspot.com",
    messagingSenderId: "1038370510616",
    appId: "1:1038370510616:web:34e4fdd2c5be84be5ff06d",
    measurementId: "G-Z133L7PGBM"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;