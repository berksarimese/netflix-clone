import React from 'react'
import NavbarBrowse from '../components/NavbarBrowse'
import HeroBrowse from '../components/HeroBrowse'
import TitleCard from '../components/TitleCard'
import '../styles/browse.css'

const Browse = () => {
  return (
    <div>
      <NavbarBrowse />
      <HeroBrowse />
      <TitleCard />
    </div>
  )
}

export default Browse