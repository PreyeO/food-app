import React from 'react'
import Food1 from "../../assets/food1.jpg";
import { StyledErrorPage } from '../../Styles/ErrorPageStyle';
import {AiOutlineArrowDown} from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Page404 = () => {

  document.body.style.backgroundColor='#00302e'
  return (
   
    <StyledErrorPage>
       <div className='error'>
    <div className='page-container'>
      <h2>4</h2>
      <div className="single-food">
        <img src={Food1} alt='menu' />
      </div>
      <h2>4</h2>
    </div> 
      <p className='info'>
        <span>Oops! </span>We couldn't find that page.
      </p>
      <p className='infos'>Maybe you can find what you need here?
      </p>
      <div className='arrow'>
      <AiOutlineArrowDown style={{width:100, height:30, borderRadius:400}}/> 
      </div>
      <div className='alternatives'>
        <ul>
       <Link to='/'> <li>Home</li></Link>
       <Link to='/login'><li>Login</li></Link>
       <Link to='/signup'><li>SignUp</li></Link>
        </ul>
        </div>
        </div>
      </StyledErrorPage>
  )
}

export default Page404