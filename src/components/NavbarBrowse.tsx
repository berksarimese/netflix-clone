import React from 'react'
import { useState, useEffect } from 'react';
import '../styles/navbar.css';
import '../styles/fonts.css';
import logo from '../media/logo.png'
import profileimage from '../media/profileimage.png'
import { TbSearch, TbBell, TbPlayerPlayFilled, TbUser, TbHelp, TbPencil, TbTransferIn } from "react-icons/tb";

const NavbarBrowse = () => {

  //SCROLL
  const [navDark, setNavDark] = useState<boolean>(false);

  const handleScroll = () => {
    const position = window.scrollY;
    if(position > 0) {
      setNavDark(true);
    } else { setNavDark(false); }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarDarkStyle = {
    background: {backgroundColor:'black'}
  }

  //HIDDEN MENU
  const [browseVisible, setBrowseVisible] = useState<boolean>(false);

  const browseStyle = {
    display: {display:'flex'}
  }

  const browseMenu = (e:boolean) => {
    setBrowseVisible(e);
  }

  console.log(browseVisible);


  return (

    <div>
        <div className='browse-navbar' style={navDark ? navbarDarkStyle.background : {}}>
          <div className='navbar-container'>
            <div className='d-flex flex-row align-items-center'> 
              <a href='#/' className='d-flex' style={{alignItems:'center'}}><img src={logo} alt="logo" className='logo' /></a>
              <div className='navbar-navigation'>
                <a href="#/" className='navigation-item'>Home</a>
                <a href="#/" className='navigation-item'>TV Shows</a>
                <a href="#/" className='navigation-item'>Movies</a>
                <a href="#/" className='navigation-item'>New & Popular</a>
                <a href="#/" className='navigation-item'>My List</a>
                <a href="#/" className='navigation-item'>Browse by Languages</a>
              </div>
              <div className='navbar-navigation-list'>
                <div className='d-flex flex-row align-items-center'>
                  <div className='navigation-item' onMouseOver={() => browseMenu(true)} onMouseOut={() => browseMenu(false)}>Browse</div>
                  <TbPlayerPlayFilled className='navigation-item' style={{transform:'rotate(90deg)', fontSize:'10px', marginLeft:'5px', marginRight:'0px'}} />
                </div>
              </div>

              <div className='browse-sub-menu' style={browseVisible ? browseStyle.display : {}}>
                <div className='position-relative'>
                 <TbPlayerPlayFilled className='position-absolute' style={{transform:'rotate(270deg)', fontSize:'14px', color:'white', top:'-8px'}} />
                </div>
                <a href="#/" className='navigation-item' style={{borderTop:'2px solid white'}}>Home</a>
                <a href="#/" className='navigation-item'>TV Shows</a>
                <a href="#/" className='navigation-item'>Movies</a>
                <a href="#/" className='navigation-item'>New & Popular</a>
                <a href="#/" className='navigation-item'>My List</a>
                <a href="#/" className='navigation-item'>Browse by Languages</a>
              </div>
            </div>
           
            <div className='navbar-second-navigation'>
              <TbSearch className='navigation-item' />
              <TbBell className='navigation-item' />
              <div className='d-flex flex-row align-items-center'>
                <img src={profileimage} alt="profile-image" style={{borderRadius:'4px'}} />
                <TbPlayerPlayFilled className='navigation-item arrow-display' style={{transform:'rotate(90deg)', fontSize:'10px', marginLeft:'10px', marginRight:'0px'}} />
              </div>
            </div>
          </div>
        </div>
        <div style={{minHeight:'9999px', minWidth:'100vw', background:'green'}}>ads</div>
    </div>

  )
}

export default NavbarBrowse