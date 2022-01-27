import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return <nav>
     <ul className='navlist'>
     <Link className='link' to="/"><li className='list-item'>Album</li></Link>
         <li className='list-item'>Topplistor</li>
         <li className='list-item'>Nyheter</li>
         <li className='list-item'>Om oss</li>
         <Link className='link' to="/sign-in"><li className='list-item'>Logga in</li></Link>
     </ul>
  </nav>
};

export default NavBar;
