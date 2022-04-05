import { useEffect, useState } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
  } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.initialize";


  initializeAuthentication()


const UseFirebase = () =>{

    const [user, setUser] = useState({});
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const registerUser = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    };
    
    
    
    const loginUser = (email, password) =>{
      signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setUser(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    }
    

    const signInUsingGoogle = () => {
      signInWithPopup(auth, GoogleProvider).then((result) => {
        console.log(result.user);
      });
    };
    
    
    const logOut = () => {
      signOut(auth).then(() => {
        setUser({});
      });
    };
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        }
      });
    }, []);
    
      return {
        user,
        signInUsingGoogle,
        logOut,
        registerUser,
        loginUser
      };


}

export default UseFirebase;