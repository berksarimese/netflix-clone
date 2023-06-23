import React from 'react'
import NavbarLanding from '../components/NavbarLanding'
import HeroLanding from '../components/HeroLanding'
import CardsLanding from '../components/CardsLanding'
import Faq from '../components/Faq'

const Landingpage = () => {
  return (
    <div className='d-flex flex-column w-100' style={{background: '#000'}}>
        <NavbarLanding />
        <HeroLanding />
        <CardsLanding />
        <Faq />
    </div>
  )
}

export default Landingpage