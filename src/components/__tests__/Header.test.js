import { render } from '@testing-library/react';
import App from '../../App';


test('test if renders logo text correct', () => {
    const component = render(<App/>)
    const headerElement = component.getByTestId('logotext') 
    expect(headerElement.textContent).toBe('The Rock Shop')
})


