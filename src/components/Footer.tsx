import React from 'react'
import '../styles/fonts.css'
import '../styles/footer.css'
import Language from './Language'


const footer = () => {



  return (
    <div className='position-relative footer-container'>
        <div className="footer-box">
            
            <div className='footer-head'>Questions? Call <a href='tel:0850-000-0000' className='link'>0850-390-7444</a></div>
            <div className='list-container'>
                <ul className='list'>
                    <li className='list-item'><a href='#/' className='link2'>FAQ</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Help Center</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Account</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Media Center</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Investor Relations</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Jobs</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Redeem Gift Cards</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Ways to Watch</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Terms of Use</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Privacy</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Cookie Preferences</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Corporate Information</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Contact Us</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Speed Test</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Legal Notices</a></li>
                    <li className='list-item'><a href='#/' className='link2'>Only on Netflix</a></li>
                </ul>
            </div>
          <div style={{paddingTop: '0.75rem', paddingBottom: '0.75rem', alignSelf: 'start'}}>
            <Language />
          </div>
          <div className='footer-head'>Netflix Turkey</div>
        
        </div>
        <div className='card-bar'></div>
        
    </div>
  )
}

export default footer