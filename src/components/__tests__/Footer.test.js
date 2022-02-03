import { render } from '@testing-library/react';
import Footer from '../footer/Footer';


test('check if footer renders with correct text', () => {
    const {getByTestId} = render(<Footer/>)
    expect(getByTestId('footertext').textContent).toBe('Created and built by Carin Wood')
})