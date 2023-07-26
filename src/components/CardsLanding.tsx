import React from 'react';
import '../styles/landingstyles.css'
import tvpng from '../media/tv.png'
import devicespng from '../media/devices.png'
import stposter from '../media/stpostersmall.png'
import downloadgif from '../media/downloadgif.gif'
import mobileimg from '../media/mobileimg.jpg'
import kidspng from '../media/kidspng.png'
import videotv from '../media/videotv.mp4'
import videodevices from '../media/videodevices.mp4'


const CardsLanding = () => {
  return (
    <>
    <div className='position-relative card'>
        <div className='card-box'>
          <div className='card-column column-mini'>
            <div className='card-title'>Enjoy on your TV</div>
            <div className='card-text'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</div>
          </div>
          <div className='card-column'>
              <img src={tvpng} className='d-flex w-100 h-100 z-2' alt="tv" />
              <video className='video1' autoPlay loop muted playsInline>
               <source src={videotv} type='video/mp4'></source>
              </video>
          </div>
        </div>
        <div className='card-bar'></div>
    </div>

    <div className='position-relative card'>
        <div className='card-box'>
          <div className='card-column order2'>
              <img src={mobileimg} className='d-flex w-100 h-100 z-2' alt="mobile" />
              <div className='status-box'>
                <img className='poster' src={stposter} alt="strangerthings-download" />
                <div className='text-box'>
                  <div className='status-title'>Stanger Things</div>
                  <div className='status-text'>Downloading...</div>
                </div>
                <img className='download-gif' src={downloadgif} alt="downloadgif" />
              </div>
          </div>
          <div className='card-column column-mini order1'>
            <div className='card-title'>Download your shows to watch offline</div>
            <div className='card-text'>Save your favorites easily and always have something to watch.</div>
          </div>
        </div>
        <div className='card-bar'></div>
    </div>

    <div className='position-relative card'>
        <div className='card-box'>
          <div className='card-column column-mini'>
            <div className='card-title'>Watch everywhere</div>
            <div className='card-text'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</div>
          </div>
          <div className='card-column'>
              <img src={devicespng} className='d-flex w-100 h-100 z-2' alt="devices" />
              <div className='video-box'>
                <video className='video2' autoPlay loop muted playsInline>
                <source src={videodevices} type='video/mp4'></source>
                </video>
              </div>
          </div>
        </div>
        <div className='card-bar'></div>
    </div>

    <div className='position-relative card'>
        <div className='card-box'>
          <div className='card-column order2'>
              <img src={kidspng} className='d-flex w-100 h-100 z-2' alt="kids" />
          </div>
          <div className='card-column column-mini order1'>
            <div className='card-title'>Create profiles for kids</div>
            <div className='card-text'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</div>
          </div>
        </div>
        <div className='card-bar'></div>
    </div>
    </>
  )
}

export default CardsLanding