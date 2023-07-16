import  { useState, useEffect, useRef } from 'react'
import '../styles/navbar.css';
import '../styles/fonts.css';
import logo from '../media/logo.png'
import profileimage from '../media/profileimage.png'
import notifyimage from '../media/notifyimg.png'
import { TbSearch, TbBell, TbPlayerPlayFilled, TbUser, TbHelp, TbPencil, TbTransferIn } from "react-icons/tb";
import { Link } from 'react-router-dom';

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

  //HIDDEN MENUS
  const [browseVisible, setBrowseVisible] = useState<boolean>(false);
  const [profileVisible, setProfileVisible] = useState<boolean>(false);
  const [notifyVisible, setNotifyVisible] = useState<boolean>(false);

  const browseStyle = {
    display: {display:'flex'}
  }

  const profileeStyle = {
    display: {display:'flex'}
  }

  const notifyStyle = {
    display: {display:'flex'}
  }

  const browseMenu = (e:boolean) => {
    setBrowseVisible(e);
  }

  const profileMenu = (e:boolean) => {
    setProfileVisible(e);
  }

  const notifyMenu = (e:boolean) => {
    setNotifyVisible(e);
  }

  //SEARCH BAR
  const [search, setSearch] = useState<string>('');
  const [searchFocus, setSearchFocus] = useState<boolean>(false);
  const searchInput = useRef<HTMLInputElement>(null);

  const searchinputstyle = {
    open: {background:'none', width: '45px', border:'none', padding: '0px', cursor:'pointer', margin:'0px', transitionDuration:'0.0s'},
    input: {background: 'none', width:'0px', transitionDuration:'0.0s'},
  }

  const searchHandle = (e:string) => {
    setSearch(e);
  }

  const searchVisible = (e:boolean) => {
    if(e === true) { searchInput.current?.focus(); } else { setSearch('') }
    setSearchFocus(e);
  }

 



  return (

    <div>
        <div className='browse-navbar' style={navDark ? navbarDarkStyle.background : {}}>
          <div className='navbar-container'>
            <div className='d-flex flex-row align-items-center'> 
              <Link to='/' className='d-flex' style={{alignItems:'center'}}><img src={logo} alt="logo" className='logo' /></Link>
              <div className='navbar-navigation'>
                <Link to='/browse/home' className='navigation-item'>Home</Link>
                <Link to='/browse/tvshows' className='navigation-item'>TV Shows</Link>
                <Link to='/browse/movies' className='navigation-item'>Movies</Link>
                <a href="#/" className='navigation-item'>New & Popular</a>
                <a href="#/" className='navigation-item'>My List</a>
                <a href="#/" className='navigation-item'>Browse by Languages</a>
              </div>
              <div className='navbar-navigation-list'>
                <div className='d-flex flex-row align-items-center' onMouseOver={() => browseMenu(true)} onMouseOut={() => browseMenu(false)}>
                  <div className='navigation-item'>Browse</div>
                  <TbPlayerPlayFilled className='navigation-item' style={{transform:'rotate(90deg)', fontSize:'10px', marginLeft:'5px', marginRight:'0px'}} />
                </div>
              </div>

              <div className='browse-sub-menu' style={browseVisible ? browseStyle.display : {}} onMouseOver={() => browseMenu(true)} onMouseOut={() => browseMenu(false)}>
                <div className='d-block' style={{height:'50px'}}></div>
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
              <div className='search-input' style={searchFocus ? {} : searchinputstyle.open}>
                <TbSearch className='navigation-item' onClick={() => searchVisible(true)} />
                <input type="text" ref={searchInput} value={search} onChange={(e) => searchHandle(e.target.value)} onBlur={() => searchVisible(false)} placeholder='Titles, people, genres' style={searchFocus ? {} : searchinputstyle.input}/>
              </div>
              <TbBell className='navigation-item' onMouseOver={() => notifyMenu(true)} onMouseOut={() => notifyMenu(false)} />
              <div className='d-flex flex-row align-items-center' onMouseOver={() => profileMenu(true)} onMouseOut={() => profileMenu(false)}>
                <img src={profileimage} alt="profileimage" style={{borderRadius:'4px'}} />
                <TbPlayerPlayFilled className='navigation-item arrow-display'  style={{transform:'rotate(90deg)', fontSize:'10px', marginLeft:'10px', marginRight:'0px'}} />
              </div>

              <div className='profile-submenu' style={profileVisible ? profileeStyle.display : {}} onMouseOver={() => profileMenu(true)} onMouseOut={() => profileMenu(false)}>
              <div className='d-block' style={{height:'27px'}}></div>
              <TbPlayerPlayFilled className='position-absolute' style={{transform:'rotate(270deg)', fontSize:'14px', color:'lightgray', top:'17px', right:'10px'}} />
                
                <div style={{borderBottom:'1px solid gray', padding:'5px 0px', backgroundColor: 'rgba(20,20,20,90%)'}}>
                  <div className='d-flex flex-row align-items-center'>
                    <TbPencil className='submenu-item'/>
                    <a href="#/">Manage Profiles</a>
                  </div>
                  <div className='d-flex flex-row align-items-center'>
                    <TbTransferIn className='submenu-item'/>
                    <a href="#/">Transfer Profile</a>
                  </div>
                  <div className='d-flex flex-row align-items-center'>
                    <TbUser className='submenu-item'/>
                    <a href="#/">Account</a>
                  </div>
                  <div className='d-flex flex-row align-items-center'>
                    <TbHelp className='submenu-item'/>
                    <a href="#/">Help Center</a>
                  </div>
                </div>
                <div className='d-flex w-100 align-items-center justify-content-center' style={{padding:'10px 0px', backgroundColor: 'rgba(20,20,20,90%)'}}>
                  <a href="#/" style={{paddingLeft:'0px'}}>Sign out of Netflix</a>
                </div>
              </div>

              <div className='notify-submenu' style={notifyVisible ? notifyStyle.display : {}} onMouseOver={() => notifyMenu(true)} onMouseOut={() => notifyMenu(false)}>
                <div className='d-block' style={{height:'25px'}}></div>
                <TbPlayerPlayFilled className='position-absolute' style={{transform:'rotate(270deg)', fontSize:'14px', color:'lightgray', top:'15px', right:'10px'}} />
                <div className='notify-box'>
                  <div className='d-flex justfiy-content-center align-items-center' style={{padding:'18px'}}>
                    <img src={notifyimage} alt="notifyimage" style={{borderRadius:'4px'}} />
                  </div>
                  <a className='d-flex flex-column' href='#/' style={{padding:'18px', paddingLeft:'0px', color:'white'}}>
                    <div>Netflix Lookahead</div>
                    <div>Explore what's coming soon.</div>
                    <div style={{color:'gray', fontSize:'12px'}}>1 week ago</div>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>

  )
}

export default NavbarBrowse