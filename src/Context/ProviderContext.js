import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, GoogleAuthProvider } from 'firebase/auth'


export const AuthContext = createContext();

const auth = getAuth(app);

const ProviderContext = ({ children }) => {


    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    //user create for registration

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //google login

    const googleProvider = new GoogleAuthProvider();

    const providerLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //git hub login

    const providerGitHub = (provider) => {
        return signInWithPopup(auth, provider);
    }

    //user signin
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //update profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }


    //log out

    const logOut = () => {
        setLoading(true);
        localStorage.removeItem('wedding-token');
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);

        })

        return () => unsubscribe();
    }, [])



    const authInfo = {
        user,
        loading,
        createUser,
        providerLogin,
        providerGitHub,
        signIn,
        updateUserProfile,
        logOut,
        setLoading
    }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ProviderContext;