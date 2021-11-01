import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Pages/Login/Firebase/firebaseinit';
import {
    getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,
} from "firebase/auth";



initializeAuthentication()

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('')

    const auth = getAuth();


    //google sign in
    const signInUsingGoogle = () => {
        setIsLoading(true)
        const GoogleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, GoogleProvider)
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false))
    }


     //observer
     useEffect(() => {
        const unsubscribed =  onAuthStateChanged(auth, (user) => {
              if (user) {
                  setUser(user)
                  setError('')
              }
              else {
                  setUser({})
              }
              setIsLoading(false);
          });
          return () => unsubscribed;
      }, [auth])

      //log out
      const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then( () => {
            setUser({})
        })
        .finally( () => setIsLoading(false))
    }



    return {signInUsingGoogle, logOut, error, isLoading, user}
};

export default useFirebase;