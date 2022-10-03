import React, {useState} from 'react'
import {AiOutlineBars, AiOutlineClose} from 'react-icons/ai'
import classes from '../../components/NavBar/NavBar.module.css'
import { Link } from 'react-router-dom'

const NavIcon = () => {
  const [showIcon,setShowIcon] = useState(false)

  const handleHamburgerClick=() =>{
    setShowIcon((prev) => !prev);

  };
  return (
    <>
     <div className={classes.navbar}>
        <span>
          <button onClick={handleHamburgerClick} >
            {
           showIcon? <AiOutlineClose style={{width:40, height:40}}/>:
          <AiOutlineBars style={{width:40, height:40}}  />
            }
          </button>
         {showIcon &&(
          <ul>
          <li className='active'><Link to={'/'}>Home</Link></li>
          <li><Link to={'/login'}className='logins'>Login</Link></li>
          <li style={{backgroundColor:'#E2B88'}}><Link to={'/signup'}>Sign Up</Link></li>
        </ul> 
     )}
     
     </span>
      </div>
      </>
  )
}

export default NavIcon