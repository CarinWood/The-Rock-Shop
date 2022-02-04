import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';


let getByTestId;

beforeEach(() => {
    const component = render(<SearchBar/>)
    getByTestId = component.getByTestId
})


test("change value of input works correctly", () => {
    const inputElement = getByTestId('input');
    fireEvent.change(inputElement, {
        target: {
            value: "5"
        }
    });
    expect(inputElement.value).toBe("5")
})


test("check if input has the correct className", () => {
    const inputElement = getByTestId('input');
    expect(inputElement.className).toBe('searchbar')
})