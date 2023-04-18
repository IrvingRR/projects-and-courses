import { authSlice, checkingCredentials, login, logout } from "../../../src/redux/auth/authSlice";
import { authenticatedState, demoUser, initialState, noAuthenticatedState } from "../../fixtures/authFixtures";

describe('authSlice test', () => {

    test('Should to return the initial state and name it "auth"', () => {
        
        const state = authSlice.reducer(initialState, {});

        expect(authSlice.name).toBe('auth');
        expect(state).toEqual(initialState);

    });

    test('Should to do the authentication', () => {

        const state = authSlice.reducer(initialState, login(demoUser));
        expect(state).toEqual({
            status: 'authenticated', // authenticated, no-authenticated, checking
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null
        });

    });

    test('Should to do the loout without error message', () => {

        const state = authSlice.reducer(authenticatedState, logout());

        expect(state).toEqual({
            status: 'no-authenticated', // authenticated, no-authenticated, checking
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined
        });

    });

    test('Should to do the logout with a error message', () => {

        const errorMessage = 'Incorrect credentials';
        const state = authSlice.reducer(authenticatedState, logout({ errorMessage }));

        expect(state).toEqual({
            status: 'no-authenticated', // authenticated, no-authenticated, checking
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage
        });

    });

    test('Should to change the state to checking', () => {

        const state = authSlice.reducer(authenticatedState, checkingCredentials());

        expect(state).toEqual({
            status: 'checking',
            uid: '123ABC',
            email: 'demo@google.com',
            displayName: 'Demo User',
            photoURL: 'https://demo.jpg',
            errorMessage: null
        });
    });

});