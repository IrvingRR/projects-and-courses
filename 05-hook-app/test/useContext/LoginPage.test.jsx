import { render, screen, fireEvent } from '@testing-library/react';
import { UserContext } from '../../src/useContext/context/UserContext';
import { LoginPage } from '../../src/useContext/LoginPage';

describe('[<LoginPage/>] - Testing' , () => {

    test('Should to show the component without user', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre-tag');

        expect(preTag.innerHTML).toBe('null');

    });

    test('Should to show the component with user', () => {

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage/>
            </UserContext.Provider>
        );

        const button = screen.getByRole('button', { name: 'Set user' });

        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalledWith({"age": 22, "email": "ulisesRomero@gmail.com", "username": "PatricioEstrella12"});

    });

});