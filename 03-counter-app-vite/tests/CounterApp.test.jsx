import { render, screen, fireEvent } from '@testing-library/react';
import CounterApp from '../src/CounterApp';

describe('Tests in <CounterApp/>', () => {


    test('Should to do match with the snapshot', () => {
        const { container } = render(<CounterApp/>);
        expect(container).toMatchSnapshot();
    });

    test('Should to show ti initial value 100', () => {
        render(<CounterApp value={100}/>);
        const value = screen.getByRole('heading', { level: 2 });

        expect(value.innerHTML).toContain('100'); // First alternative
        expect(screen.getByText(100)).toBeTruthy(); // Second alternative

    });

    test('Should to increment with the button +1', () => {
         render(<CounterApp/>);

        const value = screen.getByText('0');
        const button = screen.getByText('+1');
        fireEvent.click(button);

        // expect(screen.getByText('1')).toBeTruthy();
        expect(value.innerHTML).toBe('1');

    });

    test('Should to decrement with the button -1', () => {
         render(<CounterApp value={10}/>);

        const value = screen.getByText('10');
        const button = screen.getByText('-1');
        fireEvent.click(button);

        // expect(screen.getByText('1')).toBeTruthy();
        expect(value.innerHTML).toBe('9');

    });

    test('Should to reset to the initial value when the reset button is clicked', () => {
        render(<CounterApp/>);
        const buttonIncrement = screen.getByText('+1');
        const buttonReset = screen.getByText('Reset');

        // Other alternative to get one specific element
        const btnIncrement = screen.getByRole('button', { name: 'btn-increment' });
        const btnReset = screen.getByRole('button', { name: 'btn-reset' });

        fireEvent.click(btnIncrement);
        fireEvent.click(btnIncrement);
        fireEvent.click(btnIncrement);
        fireEvent.click(btnReset);


        expect(screen.getByText('0')).toBeTruthy();
    });

});