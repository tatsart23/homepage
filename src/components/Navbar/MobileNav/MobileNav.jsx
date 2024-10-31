import React from 'react'
import './MobileNav.css'
import { Link } from 'react-router-dom'

const MobileNav = ({ isOpen, toggleMenu}) => {
  return (
    <>
        <div
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
        >
            <div className='mobile-menu-container'>
                <img className='logo' src="./assets/images/logo.png" alt="" />
                <ul>
                    <li>
                        <Link className='menu-item' to='/' style={{textDecoration: 'none'}}>Koti</Link>
                    </li>
                    <li>
                        <Link className='menu-item' to='/projects' style={{textDecoration: 'none'}}>Projektit</Link>
                    </li>
                    <button className='contact-btn' onClick={() => {}}>Hire Me</button>
                </ul>
            </div>

        </div>
    </>
  )
}

export default MobileNav
