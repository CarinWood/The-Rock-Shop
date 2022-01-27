import React, {useState} from 'react';
import './signin.css'

const SignIn = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

  return (
  <div className='signin-container'>
        <div className='signin-card'>
          <h2 className='signin-headline'>Logga in</h2>
          <span>Användarnamn:</span>
          <input type="text" />
          <span>Lösenord:</span>
          <input type="password"></input>
        </div>
  </div>
  )
};

export default SignIn;
