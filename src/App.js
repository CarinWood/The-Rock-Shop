import './App.css';
import Header from './components/header/Header';
import Routing from './routing/Routing'
import {LoginContext} from './data/LoginProvider'
import {useState} from 'react'

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
      <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
      <Routing>
        <Header/>
      </Routing>
      </LoginContext.Provider>
   
  )
}

export default App;
