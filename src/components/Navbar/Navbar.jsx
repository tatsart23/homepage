import React from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import MobileNav from './MobileNav/MobileNav';
import {Link} from 'react-router-dom'

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)
  
  const toggleMenu = () => {
      setOpenMenu(!openMenu)
  };

  return (
    <>

      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className='nav-wrap'>
        <div className='nav-cont'>
            <img className='logo' src='./assets/images/logo.png' alt='logo'/>
            <ul>
                <li>
                    <Link className='menu-item' to='/' style={{textDecoration: 'none'}}>Koti</Link>
                </li>
                <li>
                    <Link className='menu-item' to='/projects' style={{textDecoration: 'none'}}>Projektit</Link>
                </li>
                <button className='contact-btn' onClick={() => {}}>Hire Me</button>
            </ul>

            <button className='menu-btn' onClick={toggleMenu}>
                <span>
                  {openMenu ? <CloseIcon /> : <MenuIcon />}
                </span>
            </button>

        </div>
      </nav>
    </>
  )
}

export default Navbar;
