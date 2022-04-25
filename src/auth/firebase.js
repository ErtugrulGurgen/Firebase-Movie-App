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
  apiKey: "AIzaSyBhhUVGtz3MaHIfFWEpEumxTzW_A1veTzo",
  authDomain: "movie-app-859ac.firebaseapp.com",
  projectId: "movie-app-859ac",
  storageBucket: "movie-app-859ac.appspot.com",
  messagingSenderId: "390579391003",
  appId: "1:390579391003:web:f139bb306cb8d66dc586be",
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
    navigate("/");
  } catch (err) {
    alert(err.message);
  }
};

export const signInUser = async (email, password, navigate) => {
  try {
    let signIn = await signInWithEmailAndPassword(auth, email, password);
    console.log(signIn);
    navigate("/");
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
    navigate("/");
  }).catch((error) => {
   alert(error.message);
  });
}
