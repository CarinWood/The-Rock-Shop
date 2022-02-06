import React from 'react';
import Footer from '../../components/footer/Footer';
import './signedIn.css'


const SignedIn = () => {
 
 
 

  return (
  <div className='container'>

      <div className='membership-card'>

          <div className='main-text'>
              <h1><span className='logotype'>The Rock Shop</span> <span className='club'>Club</span></h1>
              <p className='membership-level'>Medlemsnivå: <span className='gold'> GULD</span></p>
              <p className='text'>Just nu bjuder vi alla våra guldmedlemmar på 10% rabatt vid köp av valfri konsertbiljett!
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

     <Footer/>
  </div>
  )
};

export default SignedIn;
