import React from 'react';
import './navbar.css'

const NavBar = () => {
  return <nav>
     <ul className='navlist'>
         <li className='list-item'>Album</li>
         <li className='list-item'>Topplistor</li>
         <li className='list-item'>Nyheter</li>
         <li className='list-item'>Om oss</li>
         <li className='list-item'>Kontakt</li>
     </ul>
  </nav>
};

export default NavBar;
