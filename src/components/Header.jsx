import React from 'react'
import image1 from '../assets/images/3lines.png'
import '../assets/css/Mapping.css'
function Header({click}) {
  return (
    <div>
        <div className='header'>
            <img src={image1} alt="menu" onClick={click} />
            <span>Techie Nizam</span>
        </div>
    </div>
  )
}

export default Header
