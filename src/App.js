import Header from './components/header/Header';
import Routing from './routing/Routing'
import {LoginContext} from './context/LoginProvider'
import {useState} from 'react'
import { CartProvider } from './context/CartContext';



function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
      <CartProvider>
          <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
              <Routing>
                 <Header/>
              </Routing>
          </LoginContext.Provider>
      </CartProvider>
     
   
  )
}

export default App;
