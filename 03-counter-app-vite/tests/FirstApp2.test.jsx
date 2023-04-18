import { render, screen } from '@testing-library/react';
import FirstApp from '../src/FirstApp';

describe('Tests in <FirstApp/>', () => {
    
    const title = 'Hello World';
    const subtitle = 'Hi!, I am a subtitle';

    test('Shoul to show the message "Hello Wordl"', () => {
        render(<FirstApp title={ title }/>);
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('Should to show the title in a h1 tag', () => {
        render(<FirstApp title={ title }/>);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });

    test('Should to show the subtitle received in the props', () => {
        render(<FirstApp title={ title } subtitle={ subtitle }/>);
        expect(screen.getByText(subtitle)).toBeTruthy();
    });
});
