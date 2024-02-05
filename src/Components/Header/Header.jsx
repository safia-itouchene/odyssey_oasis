import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
         
         <div className="bg-img">
            <div className='bg-filter'>
                <h1>Curated Categories of Icons, Illustrations,
                   <br/> 3D Illustrations & Lottie Animations</h1>
                  <div className="buttom-header">
                     <button className='play'>Play Now</button>
                     <button className='doc'>Ducomment</button>
                  </div>
            </div>
         </div>
         <div className="header-continer"></div>
    </header>
  )
}

export default Header
