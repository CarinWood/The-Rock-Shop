import { render } from '@testing-library/react';
import Header from './components/header/Header';



test('check if button renders with correct text', () => {
    const component = render(<Header/>)
    const buttontext = component.getByTestId('cart')
    expect(buttontext.textContent).toBe('Varukorg')
})


