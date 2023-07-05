import React from 'react'
import '../styles/browsehero.css';
import '../styles/fonts.css';
import cobrahero from '../media/cobrahero.jpg'
import cobralogo from '../media/cobralogo.png'
import { TbPlayerPlayFilled, TbInfoCircle, TbReload } from "react-icons/tb";

const HeroBrowse = () => {
    
const cobrakai = {
    heroimage:cobrahero,
    logo:cobralogo,
    title: "It's Official: Another Season Is Coming",
    desc:'Decades after the torunament that changed their lives, the rivalry between Johnny and Daniel reignites in this sequel to the Karate Kid films.',
    adult: true
}


  return (
    <>
        <div className='billboard-main'>
            <div className="space">
            <div className="billboard">
                <div className="hero-container">
                    <div className="hero-info">
                        <div className="logo-text">
                            <img src={cobrakai.logo} alt="billboardlogo" />
                            <div  className='title'>
                                {cobrakai.title}
                            </div>
                            <div className='desc'>
                                {cobrakai.desc}
                            </div>
                        </div>
                        <div className="button-layer">
                            <button><TbPlayerPlayFilled className='icon' /> <div>Play</div> </button>
                            <button className='button-gray'><TbInfoCircle className='icon' /> <div>More Info</div> </button>
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={cobrakai.heroimage} alt="heroimage" />
                    <div className="image-shadow"></div>
                    <div className="hero-shadow"></div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default HeroBrowse