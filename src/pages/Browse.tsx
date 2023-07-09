import React, { useEffect, useState } from 'react'
import NavbarBrowse from '../components/NavbarBrowse'
import HeroBrowse from '../components/HeroBrowse'
import TitleCard from '../components/TitleCard'
import '../styles/browse.css'


const Browse = () => {

  //SCREEN SIZE
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  


  return (
    <div>
      <NavbarBrowse />
      <HeroBrowse />
      <TitleCard />
    </div>
  )
}

export default Browse