import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));


describe('[SearchPage] - testing', () => {

    beforeEach(() => jest.clearAllMocks());

    test('Should to render with the default values', () => {

       const {container} = render(

            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>

        );

        expect(container).toMatchSnapshot();

    });

    test('Should to show to Batman and the input with the queryString value', () => {

        render(
 
             <MemoryRouter initialEntries={['/marvel?q=batman']}>
                 <SearchPage/>
             </MemoryRouter>
 
         );
 
         const input = screen.getByRole('textbox');
         expect(input.value).toBe('batman');

         const img = screen.getByRole('img');
         expect(img.src).toContain('/assets/heroes/dc-batman.jpg');

         const alert = screen.getByLabelText('alert-danger');
         expect(alert.style.display).toBe('none');
 
     });

     test('Should to show an error if not found the hero', () => {
        render(
 
            <MemoryRouter initialEntries={['/marvel?q=batman']}>
                <SearchPage/>
            </MemoryRouter>

        );

        const alert = screen.getByLabelText('alert-danger');
        expect(alert.style.display).toBe('');
     });

     test('Should to call the navigate to new screen', () => {
        render(
 
            <MemoryRouter initialEntries={['/marvel?q=batman']}>
                <SearchPage/>
            </MemoryRouter>

        );

        const input = screen.getByRole('textbox');

        fireEvent.change(input, { name: 'searchText', value: 'superman' });

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(mockedUseNavigate).toHaveBeenCalledWith('?q=superman');
     });

});