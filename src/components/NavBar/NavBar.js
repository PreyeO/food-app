
import {NavLink} from 'react-router-dom'
import { StyledNavBar } from '../../Styles/NavBarStyle'
import NavIcon from '../NavBar/NavIcon'

const NavBar = () => {


  return (
    <>
    <StyledNavBar >
      <span>
        <div className='navs'>
          <ul>
          <NavLink to={'/'}><li className='active'>Home</li></NavLink>
          <li><NavLink to={'/login'}className='logins'>Login</NavLink></li>
          <li id ='signup'><NavLink to={'/signup'}className='signups'>Sign Up</NavLink></li>
        </ul>
        </div>
        </span>
        </StyledNavBar>
        <NavIcon />
        </>
  )
   }

export default NavBar