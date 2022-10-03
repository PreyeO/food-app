import React from 'react';
import Logos from '../assets/Logos.png'
import { StyledLogo } from '../Styles/Logo.Style';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <StyledLogo>
      <div className='logo'>
      <NavLink to='/'><img src={Logos} alt='logo'></img></NavLink>
      </div>
      </StyledLogo>
  )
}

export default Logo