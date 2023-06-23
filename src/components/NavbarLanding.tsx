import React from 'react'
import '../styles/landingstyles.css';
import logo from '../media/logo.png'
import { VscGlobe, VscTriangleDown } from "react-icons/vsc";

const NavbarLanding = () => {
  return (
    <div className='position-absolute top-0 d-flex justify-content-center w-100'>
        <div className='landing-navbar'>
            <div className='d-flex w-100'>
                <img src={logo} alt="logo" className='logo' />
            </div>
            <div className='select-box'>
                <VscGlobe className='global-icon'/>
                <select name="cars" id="cars">
                    <option value="english">English</option>
                    <option value="turkce">Türkçe</option>
                </select>
                <VscTriangleDown className='arrow-icon' />
            </div>
            <a href='/' className='button'>Sign In</a>
            
        </div>
    </div>
  )
}

export default NavbarLanding