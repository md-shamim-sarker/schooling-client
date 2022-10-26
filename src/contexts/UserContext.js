import React, {createContext, useEffect, useState} from 'react';
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, sendEmailVerification, GithubAuthProvider, FacebookAuthProvider} from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (userObj) => {
        return updateProfile(auth.currentUser, userObj);
    };

    const sendUserEmailVerification = () => {
        return sendEmailVerification(auth.currentUser);
    };

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider);
    };

    const signInWithFacebook = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Very special part (Manage Users > Get the currently signed-in user)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        updateUser,
        signIn,
        logOut,
        signInWithGoogle,
        signInWithGithub,
        signInWithFacebook,
        sendUserEmailVerification
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;