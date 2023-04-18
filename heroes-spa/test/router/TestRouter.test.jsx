import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
// import { AppRouter } from "../../src/router/AppRouter";

describe('[AppRouter] - testing', () => {

    test('Should to show the login when the user is not authenticated', () => {
        const contextValue = {
            logged: false
        };

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    {/* <AppRouter/> */}
                </AuthContext.Provider>
            </MemoryRouter>
        );

        // expect(screen.getByText('Login').length).toBe(2);
    });

    test('Should to return the component MarvelPage if the user is authenticated', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Benito Juarez',
                id: '123ABC'
            }
        };

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    {/* <AppRouter/> */}
                </AuthContext.Provider>
            </MemoryRouter>
        );

        // expect(screen.getByText('Marvel').length).toBeGreaterThanOrEqual(1);
    })


});