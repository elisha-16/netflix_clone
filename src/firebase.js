import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/storage' 
 import 'firebase/auth' 


const firebaseConfig = {
    apiKey: "AIzaSyCrN3w_vZ6v7fBT8Br5e3HRa0iJCKKiNa8",
    authDomain: "netflix-clone-24ad3.firebaseapp.com",
    projectId: "netflix-clone-24ad3",
    storageBucket: "netflix-clone-24ad3.appspot.com",
    messagingSenderId: "91795276531",
    appId: "1:91795276531:web:d460acf1e1e1ea979c6d86"
  };

  // const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const db = firebaseApp.firestore();
  // const auth = firebase.auth();

  // export {auth};
  // export default db;
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db,auth };
  