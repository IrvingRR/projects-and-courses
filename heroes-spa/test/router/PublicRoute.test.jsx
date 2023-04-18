import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PublicRoute } from "../../src/router/PublicRoute";

describe('[PublicRoute] - testing', () => {

    test('Should to render the children is the user is not logged', () => {

        const contextValue = {
            logged: false
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Public route</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Public route')).toBeTruthy();
    });

    test('Should to navigate if the user is authenticated', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Patrocleo',
                id: 'ABC123'
            }
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='marvel' element={<h1>Marvel page</h1>}/>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Public route</h1>
                            </PublicRoute>
                        }/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        expect(screen.getByText('Marvel page')).toBeTruthy();                        

    });

});