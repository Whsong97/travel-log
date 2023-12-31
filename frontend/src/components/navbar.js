import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button.js';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click); 
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL <i className="fab fa-gripfire"></i>
          </Link>

          <div className='menu-icon' onClick={ handleClick }>
            <i className={ click ? 'fas fa-times' : 'fas fa-bars' }></i>
          </div>


          {}
          </div>
            <li className='nav-item'>
              <Link to='/signin' className='nav-links-mobile' onClick={ closeMobileMenu } >
                Sign in/Sign Up
              </Link>
            </li>

          {}
          { button && <Button buttonStyle='btn--outline'>Sign In/Sign Up</Button>}
      </nav>
    </>
  )
}

export default Navbar;