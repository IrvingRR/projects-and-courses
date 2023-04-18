import { render, screen } from '@testing-library/react';
import { UserContext } from '../../src/useContext/context/UserContext';
import { HomePage } from '../../src/useContext/HomePage';

describe('[<HomePage/>] - Testing', () => {

    const user = {
        id: 1,
        name: 'Fernando'
    };

    test('Should to show the component without user', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage/>
            </UserContext.Provider>
        );
    
        const preTag = screen.getByLabelText('pre-tag');
        expect(preTag.innerHTML).toBe('null');
    
    });

    test('Should to show the component with user', () => {


        render(
            <UserContext.Provider value={{ user }}>
                <HomePage/>
            </UserContext.Provider>
        );


        const preTag = screen.getByLabelText('pre-tag');
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.id.toString());

    });


});