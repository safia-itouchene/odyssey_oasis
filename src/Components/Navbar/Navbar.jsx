import React ,{ useState } from 'react'
import './Navbar.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ReorderIcon from '@mui/icons-material/Reorder';
function Navbar() {
    const [openLinks , setOpenLinks] = useState(false);
    const toggleNvabar =()=>{
        setOpenLinks(!openLinks)
    };
  return (
    <nav className='nav-bar'>
         <div className='logo'>
             <a link="#">Odyssey<b>Oasis</b></a>
         </div>
        
         <div className='hidden-menu'>
         <ul className='menu-mobile'  id={openLinks ? "open" : "close"}>
            <li className='active'>Home</li>
            <li>Games</li>
            <li>Contac us</li>
            <li>About us</li>
            <li className='search' id='search-mobile'>
               <SearchRoundedIcon/>
               <input type="text" placeholder='search hear ...'/>
            </li>
         </ul>
         <button  onClick={toggleNvabar}>
               <ReorderIcon/>
        </button>
         </div>
        
          
        <ul className='menu-bar'>
            <li className='active'>Home</li>
            <li>Games</li>
            <li>Contac us</li>
            <li>About us</li>
         </ul>
         <div className='search' id='search'>
            <SearchRoundedIcon/>
            <input type="text" placeholder='search hear ...'/>
        </div>        
    </nav>
  )
}

export default Navbar
