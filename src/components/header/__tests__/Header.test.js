import { fireEvent, render } from '@testing-library/react';
import App from '../../../App';
import Cart from '../../cart/Cart';

let getByTestId;

beforeEach(() => {
    const component = render(<App/>)
    getByTestId = component.getByTestId
})


test('test if renders logo text correct', () => {
    expect(getByTestId('logotext').textContent).toBe('The Rock Shop')
})


test("check if button renders with correct text", () => {
    expect(getByTestId('cart-btn').textContent).toBe("Varukorg")
})


test("check if counter renders with correct digit", () => {
    expect(getByTestId('counter').textContent).toBe("0")
})




