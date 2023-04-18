import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";
import { clearNotesLogout } from "../journal/journalSlice";

export const checkingAuthenticationThunk = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

    };
};

export const startGoogleSignInThunk = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await signInWithGoogle();

        if(!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result));

    };
};

export const startCreateUserWithEmailPasswordThunk = ({ email, password, displayName }) => {

    return async (dispatch) => {
        dispatch(checkingCredentials());

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

        if(!ok) return dispatch(logout({ errorMessage }));

        dispatch(login({ uid, displayName, email, photoURL }));

    };
};

export const startLoginWithEmailPasswordThunk = ({ email, password }) => {

    return async (dispatch) => {

        dispatch(checkingCredentials());

        const response = await (loginWithEmailPassword({ email, password }));

        if(!response.ok) return dispatch(logout({ errorMessage: response.errorMessage }));

        dispatch(login(response));

    };

};

export const startLogoutThunk = () => {

    return async (dispatch) => {
        await logoutFirebase();

        dispatch(clearNotesLogout());
        dispatch(logout());
    };

};