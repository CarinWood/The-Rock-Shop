import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom'
import './signedIn.css'
import { LoginContext } from '../../data/LoginProvider';

const SignedIn = () => {
  const {loggedIn, setLoggedIn} = useContext(LoginContext);
  const navigate = useNavigate();
 
  function logOut() {
    setLoggedIn(!loggedIn);
    navigate("/")
  }

  return (
  <div className='container'>

      <div className='membership-card'>

        <div className='main-text'>
          <h1><span className='logotype'>The Rock Shop</span> <span className='club'>Club</span></h1>
          <p className='membership-level'>Medlemsnivå: <span className='gold'> GULD</span></p>
          <p className='text'>Just nu bjuder vi alla våra guldmedlemmar på 10% rabattvid köp av valfri konsertbiljett!
             Använd koden: <span className='sale'>RockShop10</span> när du handlar på <span className='tickets'>konsertbiljetter.se</span>
          </p>
          <p>Erbjudandet gäller t.o.m. den 21/3 - 2022</p>
        </div>

        <div className='circle'>
              <div className='inner-circle'>
                  <p className='inner-text'>GULD</p>
              </div>
        </div>

      </div>

      <button onClick={logOut} className='sign-out-btn'>Logga ut</button>
  </div>
  )
};

export default SignedIn;
