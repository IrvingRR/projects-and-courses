import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/redux/auth/authSlice";
import { checkingAuthenticationThunk, startCreateUserWithEmailPasswordThunk, startGoogleSignInThunk, startLoginWithEmailPasswordThunk, startLogoutThunk } from "../../../src/redux/auth/thunks";
import { clearNotesLogout } from "../../../src/redux/journal/journalSlice";
import { authenticatedState } from "../../fixtures/authFixtures";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock('../../../src/firebase/providers');

describe('authThunks test', () => {

    const dispatch = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Should to invoke the checkingCredentials', async () => {
 
        await checkingAuthenticationThunk()(dispatch);
        expect(dispatch).toBeCalledWith(checkingCredentials());

    });

    test('startGoogleSignIn should to call checkingCredentials and login - success case', async () => {

        const loginData = { ok: true, ...demoUser };
        await signInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSignInThunk()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));

    });

    test('startGoogleSignIn should to call checkingCredentials and logoute - Error case', async () => {

        const loginData = { ok: false, errorMessage: 'It occurred an error to try to sign in with google' };

        await signInWithGoogle.mockResolvedValue(loginData);
        await startGoogleSignInThunk()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));

    });

    test('startLoginWithEmailPassword should to call checkingCredentials and login - Success case', async () => {

        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: '123456' };

        await loginWithEmailPassword.mockResolvedValue(loginData);
        await startLoginWithEmailPasswordThunk(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));

    });

    test('startLoginWithEmailPassword should to call checkingCredentials and login - Error case', async () => {

        const loginData = { ok: false, errorMessage: 'Incorrect credentials' };
        const formData = { email: demoUser.email, password: '123456' };

        await loginWithEmailPassword.mockResolvedValue(loginData);
        await startLoginWithEmailPasswordThunk(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout({ errorMessage: loginData.errorMessage }));

    });

    test('startCreatingUserWithEmailPassword should to call checkingCredentials and registerUserWithEmailPassword - Success case', async () => {

        const formData = { email: demoUser.email, password: '123456', displayName: demoUser.displayName };
        const valueResolved = { 
            ok: true, 
            email: demoUser.email,
            displayName: demoUser.displayName,
            uid: demoUser.uid,
            photoURL: demoUser.photoURL
        };

        await registerUserWithEmailPassword.mockResolvedValue(valueResolved);
        await startCreateUserWithEmailPasswordThunk(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(login({...demoUser}));


    });

    test('startLogout should to call logoutFirebase, clearNotes and logout', async () => {

        await startLogoutThunk()(dispatch);

        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
        expect(dispatch).toHaveBeenCalledWith(logout());

    });

});