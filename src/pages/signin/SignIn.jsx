import React, {useState, useContext} from 'react';
import { useNavigate} from 'react-router-dom'
import './signin.css'
import { UserContext } from '../../data/UserProvider';

const SignIn = () => {
const hej = useContext(UserContext);
  
const navigate = useNavigate()

    const existingUser = {
      user: 'Carin',
      password: 'pass'
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function checkUser() {
      if(username === existingUser.user && password === existingUser.password) {
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
                  onChange={event => setUsername(event.target.value)} />
              </form>

              <form>
                  <label>Lösenord:</label>
                  <input className='input' type="password" 
                  onChange={event => setPassword(event.target.value)}></input>
               
              </form>

              <button 
              className="signin-btn" 
              type="button"
              onClick={checkUser}
              >
                Logga in
              </button>
              {hej}
        </div>
      
        
  </div>
  )
};

export default SignIn;
