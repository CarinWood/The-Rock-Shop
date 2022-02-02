import { render } from '@testing-library/react';
import Home from '../../pages/home/Home';


test('check if home is rendering the correct headline', () => {
    const {getByTestId} = render(<Home/>)
    expect(getByTestId(headline).textContent).toBe('Populära produkter')

})