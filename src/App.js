import './App.css';
import Header from './components/header/Header';
import Routing from './routing/Routing'
import {LoginContext} from './data/LoginProvider'
import {useState} from 'react'
import { CartProvider } from './data/CartContext';

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
