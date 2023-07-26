import React from 'react'
import '../styles/landingstyles.css'
import heroimage from '../media/heroimage.jpg'
import ReadyToWatch from './ReadyToWatch'



const HeroLanding = () => {
    

  return (
    <div className='position-relative hero'>
        <div className='hero-box'>
            <div className='hero-title'>Unlimited movies, TV shows, and more</div>
            <div className='hero-text' style={{marginTop:'1rem'}}>Watch anywhere. Cancel anytime.</div>
            <ReadyToWatch />  
        </div>
        <div className='image-container'>
            <img src={heroimage} alt="hero" className='image' />
            <div className='shadow'></div>
        </div>
    </div>
  )
}

export default HeroLanding