import React from 'react'
import { VscGlobe, VscTriangleDown } from "react-icons/vsc";
import '../styles/lanselect.css'

const Language = () => {
  return (
    <div className='language-select-box'>
                <VscGlobe className='global-icon'/>
                <select name="languages" id="languages">
                    <option value="english">English</option>
                    <option value="turkce">Türkçe</option>
                </select>
                <VscTriangleDown className='arrow-icon' />
            </div>
  )
}

export default Language