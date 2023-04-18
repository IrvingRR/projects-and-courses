import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { Navbar } from "../../../src/ui/components/Navbar";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('[Navbar] - testing', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Mark Anthony',
            id: 'ABC123'
        },
        logout: jest.fn()
    };

    beforeEach(() => jest.clearAllMocks());

    test('Should to show the name of the user authenticated', () => {

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getByText('Mark Anthony')).toBeTruthy();


    });

    test('Should to call the logout and navigate when button "logout" is clicked', () => {


        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        
        const buttonLogout = screen.getByRole('button', { name: 'Logout' });
        
        fireEvent.click(buttonLogout);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});
    });

});