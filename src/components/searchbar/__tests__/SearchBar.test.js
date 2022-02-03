import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';


test("change value of input works correctly", () => {
    const {getByTestId} = render(<SearchBar/>)
    const inputElement = getByTestId('input');
    fireEvent.change(inputElement, {
        target: {
            value: "5"
        }
    });
    expect(inputElement.value).toBe("5")
})