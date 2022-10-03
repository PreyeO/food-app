import React from "react";
import Food1 from "../../assets/food1.jpg";
import Logo from "../../components/Logo";
import googleplay from "../../assets/googleplay.png";
import applestore from "../../assets/applestore.png";
import NavBar from "../../components/NavBar/NavBar";
import {AiOutlineTwitter, AiOutlineYoutube, AiOutlineInstagram} from 'react-icons/ai'
import { Link } from "react-router-dom";



const Home = ({ data }) => {
  document.body.style.backgroundColor='#00302e'

  return (
    <div className='home'>
      <Logo />
      <NavBar/>
      <div className="styling">
      <span>
      <h1>Lillies</h1>
      </span>
      <div className="hero">
        <div className="hero2">
          <p id='big-text'> Order <span style={{color:'#e2b887'}}>food</span> anytime,
          <div className="spans">anywhere
        </div> 
          </p>
          <p id="small-text">
            Browse from our list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast!
          </p>
          <div className="downloadstore">
          <Link to='*'><img
              src={googleplay}
              alt="google play"
            /></Link>
            <div className="apple">
            <Link to='*'><img
              src={applestore}
              alt="apple store"
            /></Link>
            </div>
          </div>
          <div className="foods1">
            <img src={Food1} alt='menu'/>

          </div>
        
          <p id="txt">Special Meals of the day!</p>
          <p id="text">
            Check our sepecials of the day and get discounts on all our meals
            and swift delivery to what ever location within Lagos.
          </p>
          <div className='article'>
            <p id="notify">Get notified when update!
            </p>
            <p id="note">
              Get notified when we add new items to our specials menu, update our price list or have promo!
              </p>
              <div className="newsletter">
                <form>
                  <input type="text" placeholder="preyeomusuku@gmail.com" name="email">
                  </input>
                  <Link to='*'> <button type="submit" name="submit" id="mail">
                    Get notified
                  </button></Link> 
                </form>
              </div>
          </div>
      </div>
      </div>
      </div>
      <div className="styling-three">
      <footer>
        <div className="footer-container">
          <div className="box-1">
            <h3>Company</h3>
            <h4>About Us</h4>
            <h4>Careers</h4>
            <h4>Contact Us</h4>
          </div>
          <div className="box-2">
            <h3>Support</h3>
            <h4>Help Center</h4>
            <h4>Safety Center</h4>
          </div>
          <div className="box-3">
            <h3>Legal</h3>
            <h4>Cookies Policy</h4>
            <h4>Privacy Policy</h4>
            <h4>Terms of Service</h4>
          </div>
          <div className="box-4">
            <h3>Install App</h3>
            <h4><Link to='*'>
              <img src={googleplay} alt="google play" /></Link>
            </h4>
            <h4><Link to='*'>
              <img src={applestore} alt="apple store" /></Link>
            </h4>
          </div> 
          <div className="socials">
          <Link to='*'><AiOutlineTwitter style={{width:40, height:30}} /></Link>
          <Link to='*'> <AiOutlineYoutube style={{width:40, height:30}}/></Link>
          <Link to='*'><AiOutlineInstagram style={{width:40, height:30}} /></Link>
          </div>
          <p>© 2021 LILIES, All rights reserved</p>
        </div>
      </footer>
      </div>
      <div className="styling-two">
      <div
        className="food-contains">
        {data &&
          data?.map((item, index) => (
            <div className="food-container">
              <img
                src={item?.food}
                alt="food menus"
                style={{ borderRadius: 400 }}
              />
              <h3>
                {item?.name}
              </h3>
              <p>
                {item?.description}
              </p>
            </div>
          ))}
      </div>
      </div>
      </div>
  );
};

export default Home;
