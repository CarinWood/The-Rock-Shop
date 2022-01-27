import React, {useState, useContext} from 'react';
import SearchBar from '../searchbar/SearchBar';
import './header.css'
import { FaShoppingBasket } from 'react-icons/fa';
import NavBar from '../navbar/NavBar';
import Cart from '../cart/Cart';
import { LoginContext } from '../../data/LoginProvider';
import { useNavigate, useNavigation } from 'react-router-dom'


const Header = () => {

  const navigation = useNavigate()

  const {loggedIn, setLoggedIn} = useContext(LoginContext);

  const [ShowingCart, setShowingCart] = useState(false)

  function showCart() {
    setShowingCart(!ShowingCart)
 
  }

  function logOutFunc() {
    setLoggedIn(!loggedIn)
    navigation("/")
  }

  return (
    <>
  <header>
     
      <div className='logo'> The Rock Shop</div>
     
      <SearchBar/>

          {loggedIn? <p className='membername'>Carin <span onClick={logOutFunc} className='logout'>(Logga ut)</span></p>: null}

          <div className='basket-div'>
              <FaShoppingBasket className="basket-icon" />
              <p className='digit'>0</p>
              <button onClick={showCart} className='header-btn' type="button">Varukorg</button>
          </div>
  </header>
      <NavBar/>
      {ShowingCart && <Cart/>}
      
    </>

  )
};

export default Header;
