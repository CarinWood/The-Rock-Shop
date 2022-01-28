import React, {useState, useContext} from 'react';
import { useNavigate} from 'react-router-dom'
import './signin.css'
import { LoginContext } from '../../context/LoginProvider';

const SignIn = () => {


const {loggedIn, setLoggedIn} = useContext(LoginContext)
  
const navigate = useNavigate()

    const existingUser = {
      user: 'Carin',
      password: 'password'
    }

    const [username, setUsername] = useState('Carin')
    const [password, setPassword] = useState('password')

    function checkUser() {
      if(username === existingUser.user && password === existingUser.password) {
          setLoggedIn(!loggedIn);
          navigate('/signed-in')
       
      } else {
        alert('Du skrev fel användarnamn och/eller lösenord!')
      }
    }

  return (
  <div className='signin-container'>
        <div className='signin-card'>
          <h2 className='signin-headline'>Logga in på Mina Sidor</h2>
        
              <form>
                  <label>Användarnamn:</label>
                  <input className="input" type="text" 
                  onChange={event => setUsername(event.target.value)}
                  value={username}
                  />
              </form>

              <form>
                  <label>Lösenord:</label>
                  <input className='input' type="password" 
                  onChange={event => setPassword(event.target.value)}
                  value={password}
                    />
               
              </form>

              <button 
              className="signin-btn" 
              type="button"
              onClick={checkUser}
              >
                Logga in
              </button>
       
        </div>
      
        
  </div>
  )
};

export default SignIn;
