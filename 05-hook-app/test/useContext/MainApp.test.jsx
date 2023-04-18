import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from '../../src/useContext/MainApp';

describe('[<MainApp/>] - Testing', () => {

    test('Should to show the HomePage component', () => {

        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        );

        expect(screen.getByText('MainApp'));


    });

    test('Should to show the HomePage component', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        );

        // expect(screen.getByText('LoginPage'));
        screen.debug();
    });

});