import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) => {
  try {
    let credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
      );
    await updateProfile(auth.currentUser, 
    {
      displayName: displayName,
    });
    navigate("Firebase-Movie-App/");
  } catch (err) {
    alert(err.message);
  }
};

export const signInUser = async (email, password, navigate) => {
  try {
    let signIn = await signInWithEmailAndPassword(auth, email, password);
    console.log(signIn);
    navigate("Firebase-Movie-App/");
  } catch (err) {
    alert(err.message);
  }
};

export const signOutUser = async () => {
    await signOut(auth)}; 

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser)=> {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      setCurrentUser(false);
    }
  });
}

export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result);
    navigate("Firebase-Movie-App/");
  }).catch((error) => {
   alert(error.message);
  });
}
