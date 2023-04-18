import { render } from '@testing-library/react';
import FirstApp from '../src/FirstApp';

describe('Tests in <FirstApp/>', () => {

    test('Should to do match with the snapshot', () => {
        const title = 'Hi!, frontend developer';
        const { container } = render(<FirstApp title={ title }/>);

        expect(container).toMatchSnapshot();

    });

    test('should to show the title in a h1 tag', () => { 
        const title = 'Hi developer!';
        const { getByText, getByTestId } = render(<FirstApp title={ title }/>);
        expect(getByText(title)).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toContain(title);
    });

    

});
