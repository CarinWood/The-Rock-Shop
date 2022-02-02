import { render } from '@testing-library/react';
import Footer from '../footer/Footer';

test('check if footer renders with correct text', () => {
    const component = render(<Footer/>)
    const footertext = component.getByTestId('footertext')
    expect(footertext.textContent).toBe('Created and built by Carin Wood')
})