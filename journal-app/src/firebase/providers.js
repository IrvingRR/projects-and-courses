import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result); // With this we can get all the credentials from google like token and other more credentials
        const { displayName, email, photoURL, uid } = result.user;
        
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        };
        
    } catch (error) {

        return {
            ok: false,
            errorCode: error.code,
            errorMessage: error.message,
            credential: GoogleAuthProvider.credentialFromError(error),
        };

    }
};

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {

        const response = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = response.user;

        await updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        };

        
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            errorMessage: error.message,
        };
    }
};

export const loginWithEmailPassword = async ({ email: emailAddress, password }) => {

    try {

        const response = await signInWithEmailAndPassword(FirebaseAuth, emailAddress, password);
        const { displayName, email, photoURL, uid } = response.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        };
        
    } catch (error) {
        return {
            ok: false,
            errorCode: error.code,
            errorMessage: error.message,
        };
    }

};

export const logoutFirebase = async () => {

    return await FirebaseAuth.signOut();

};