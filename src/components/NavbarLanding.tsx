import React from 'react'
import '../styles/landingstyles.css';
import logo from '../media/logo.png'
import Language from './Language';
import { Link } from 'react-router-dom';

const NavbarLanding = () => {
  return (
    <div className='position-absolute top-0 d-flex justify-content-center w-100'>
        <div className='landing-navbar'>
            <div className='d-flex w-100'>
                <img src={logo} alt="logo" className='logo' />
            </div>
            <Language />
            <Link to='/signin' className='button'>Sign In</Link>
            
        </div>
    </div>
  )
}

export default NavbarLanding