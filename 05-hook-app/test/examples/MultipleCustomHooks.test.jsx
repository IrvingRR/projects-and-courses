import { fireEvent, render, screen } from "@testing-library/react";
import MultipleCustomHooks from "../../src/examples/MultipleCustomHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('[<MultipleCustomHooks>] - Testing', () => {

    const mockIncrementCounter = jest.fn();

    useCounter.mockReturnValue({
        counter: 11007,
        incrementCounter: mockIncrementCounter
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Should to show the default component', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            error: null
        });
        
        render(<MultipleCustomHooks/>);

        const buttonNext = screen.getByRole('button', { name: 'Next cocktail' });

        expect(screen.getByText('Cocktails'));
        expect(screen.getByText('Loading...'));
        expect(buttonNext.disabled).toBeTruthy();


    });

    test('Should to return one cocktail', () => {

        useFetch.mockReturnValue({
            data: { 
                drinks: [
                    { 
                        strDrink: 'Michelada', 
                        strInstructions: 'Beer with chili and clamato'
                    }
                ]
            },
            isLoading: false,
            error: null
        });

        render(<MultipleCustomHooks/>);

        const buttonNext = screen.getByRole('button', { name: 'Next cocktail' });

        expect(screen.getByText('Cocktails'));
        expect(screen.getByText('Michelada'));
        expect(screen.getByText('Beer with chili and clamato'));
        expect(buttonNext.disabled).toBeFalsy();

        screen.debug();

    });

    test('Should to call the increment function when the button is clicked', () => {

        useFetch.mockReturnValue({
            data: { 
                drinks: [
                    { 
                        strDrink: 'Michelada', 
                        strInstructions: 'Beer with chili and clamato'
                    }
                ]
            },
            isLoading: false,
            error: null
        });

        render(<MultipleCustomHooks/>);

        const buttonNext = screen.getByRole('button', { name: 'Next cocktail' });

        fireEvent.click(buttonNext);

        expect(mockIncrementCounter).toHaveBeenCalled();

    });

});