import React from 'react'
import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
         <div className='logo'>
             <a link="#">Odyssey<b>Oasis</b></a>
         </div>
        <div className="social-media">
             <GitHubIcon/>
             <LinkedInIcon/>
             <YouTubeIcon/>
        </div>
        <p className='copryright'>copyright OdysseyOasis 2024</p>
      </div>    
    </div>
  )
}

export default Footer
