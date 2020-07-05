import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const config = {

        apiKey: "AIzaSyBEoi9m0QOup3d4Vda-iVRc-1DDkcoGAH4",
        authDomain: "cractus-clothing.firebaseapp.com",
        databaseURL: "https://cractus-clothing.firebaseio.com",
        projectId: "cractus-clothing",
        storageBucket: "cractus-clothing.appspot.com",
        messagingSenderId: "395716091890",
        appId: "1:395716091890:web:8696accb0858ecdfa8556b"

      };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  console.log(firestore.doc(`user/${userAuth.uid}`));
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName,email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
      
    } catch (error) {
      console.log("The error is",error.message);
          
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithPopup = () => auth.signInWithPopup(provider);

export default firebase;
