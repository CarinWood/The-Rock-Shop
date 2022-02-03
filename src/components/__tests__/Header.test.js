import { getByTestId, render } from '@testing-library/react';
import App from '../../App';


test('test if renders logo text correct', () => {
    const {getByTestId} = render(<App/>)
    expect(getByTestId('logotext').textContent).toBe('The Rock Shop')
})


test("check if button renders with correct text", () => {
    const {getByTestId} = render(<App/>)
    expect(getByTestId('cart-btn').textContent).toBe("Varukorg")
})

