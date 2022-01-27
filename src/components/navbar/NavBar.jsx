import React, {useContext} from 'react';
import './navbar.css'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../data/LoginProvider';

const NavBar = () => {
  const {loggedIn, setLoggedIn} = useContext(LoginContext);

  return <nav>
     <ul className='navlist'>
     <Link className='link' to="/"><li className='list-item'>Album</li></Link>
         <li className='list-item'>Topplistor</li>
         <li className='list-item'>Nyheter</li>
         <li className='list-item'>Om oss</li>
       
         {loggedIn ? <Link className='link' to="/signed-in"><li className='list-item'>Mina Sidor</li></Link> :
           <Link className='link' to="/sign-in"><li className='list-item'>Logga in</li></Link> }
     </ul>
  </nav>
};

export default NavBar;
