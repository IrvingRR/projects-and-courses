import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../../../src/redux/auth";
import { MemoryRouter } from "react-router-dom";
import { noAuthenticatedState } from "../../fixtures/authFixtures";

const mockStartGoogleSignInThunk = jest.fn();
const mockStartLoginWithEmailPasswordThunk = jest.fn();

jest.mock('../../../src/redux/auth/thunks', () => ({
    startGoogleSignInThunk: () => mockStartGoogleSignInThunk,
    startLoginWithEmailPasswordThunk: ({ email, password }) => {
        return () => mockStartLoginWithEmailPasswordThunk({ email, password });
    }
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn()
}));

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },

    preloadedState: {
        auth: noAuthenticatedState
    }
});

describe('<LoginPage/> Test', () => {

    beforeEach(() => jest.clearAllMocks());


    test('Should to render the component', () => {

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        );

        expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);

    }); 

    test('Google button should to call the startGoogleSignIn', () => {

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        );

        const googleButton = screen.getByRole('button', { name: 'Google' });
        fireEvent.click(googleButton);       
        
        expect(mockStartGoogleSignInThunk).toHaveBeenCalled();

    });

    test('Submit should to call startLoginWithEmailPassword', () => {

        const emailValue = 'testing@gmail.com';
        const passwordValue = 'testing123';

         render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        );

        const emailField = screen.getByPlaceholderText(/email@gmail.com/i);
        const passwordField = screen.getByPlaceholderText(/password/i);
        
        fireEvent.change(emailField, { target: { name: 'email', value: emailValue } });
        fireEvent.change(passwordField, { target: { name: 'password', value: passwordValue } });

        const formLogin = screen.getByLabelText('form-login');
        fireEvent.submit(formLogin);

        expect(mockStartLoginWithEmailPasswordThunk).toHaveBeenCalledWith({
            email: emailValue,
            password: passwordValue
        });


    });


});