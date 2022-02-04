import { render } from '@testing-library/react';
import Footer from '../Footer';

let getByTestId

beforeEach(() => {
    const component = render(<Footer/>);
    getByTestId = component.getByTestId
})


test('check if footer renders with correct text', () => {
    expect(getByTestId('footertext').textContent).toBe('Created and built by Carin Wood')
})

test('check if the footer contains the right className', () => {
    expect(getByTestId('footertext').className).toBe('footer');
})