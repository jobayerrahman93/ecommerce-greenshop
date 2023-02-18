import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initialzeAuthentication from "../firebase.config";



initialzeAuthentication();

const useFirebase = () => {


    const [users,setUsers]=useState({});
    const [errors,setErrors]=useState({});


    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn=()=>{


                signInWithPopup(auth, provider)
                .then((result) => {
                    
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    setUsers(user);

                }).catch((error) => {
                    
                    const errorMessage = error.message;

                    setErrors(errorMessage);
                
                });
                    }



    const logOut=()=>{
        signOut(auth).then(() => {
            setUsers({});
          }).catch((error) => {
            setErrors(error)
          });
    }                
                    


    useEffect(()=>{

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            } else {
                setUsers({})
            }
        });
      },[]);


    return {
        googleSignIn,
        users,
        logOut
    };
};

export default useFirebase;