import React from 'react'
import '../styles/landingstyles.css';
import logo from '../media/logo.png'
import Language from './Language';

const NavbarLanding = () => {
  return (
    <div className='position-absolute top-0 d-flex justify-content-center w-100'>
        <div className='landing-navbar'>
            <div className='d-flex w-100'>
                <img src={logo} alt="logo" className='logo' />
            </div>
            <Language />
            <a href='/' className='button'>Sign In</a>
            
        </div>
    </div>
  )
}

export default NavbarLanding