import { Link, NavLink } from "react-router-dom";
import profilepics from "../../assets/profilepics.png";
import Modal from "../../components/Modal/Modal";
import Logo from "../../components/Logo";
import {AiOutlineHome, AiOutlineUser, AiOutlineGift,AiOutlineShoppingCart} from 'react-icons/ai';


const DashBoard = ({ meals, onAdd, count }) => {
  let user = JSON.parse(sessionStorage.getItem("user"));
  
  let timeDay = new Date().getHours();
  let timeGreet = null;

  if (timeDay < 12) {
    timeGreet = "Good morning";
  } else if (timeDay < 16) {
    timeGreet = "Good afternoon";
  } else if (timeDay < 21) {
    timeGreet = "Good evening";
  } else {
    timeGreet = "Good night";
  }
  document.body.style.backgroundColor='white'
  return (
    <div className="dash-board">
      <Logo/>
      <span>
      <h1>Lillies</h1>
      </span>
        <div className="greetings">
          <h2>
            {timeGreet}, {user?.name}!
          </h2>
          <p>What delicious meal are you craving today?</p>
          <span>
            <img src={profilepics} alt="profile">
            </img>
            </span>
        </div>
        <div className="dashboard">
          <div className="fahome">
          <NavLink to='/'><AiOutlineHome style={{ width: 100, height: 40 }}></AiOutlineHome></NavLink>
            <h2>
            <span>Dashboard</span>
            </h2>
            </div>
            <div className="fauser">
            <NavLink to='*'><AiOutlineUser style={{ width: 100, height: 40 }}></AiOutlineUser></NavLink>
               <h2>
                <span>Myprofile</span>
                </h2>
                </div>
                <div className="fagift">
                <Link to='/orders'><AiOutlineGift style={{ width: 100, height: 40 }}></AiOutlineGift></Link>
                  <h2>
                    <span>Orders</span>
                  </h2>
                  <Link to="/orders"><input type="text" name="text" placeholder={count} id="fagift"></input></Link>
                    </div>
                    <div className="facart">
                    <NavLink to='/cart'><AiOutlineShoppingCart style={{ width: 100, height: 40 }}>
                      </AiOutlineShoppingCart></NavLink>
                      <h2>
                        <span>Cart</span>
                      </h2>
                        <NavLink to="/cart">
                          <input type="text" name="text" placeholder={count} />
                          </NavLink>
                          </div>
                    </div>

        <div className="container">
          {meals.map((meal) => (
            <div className="card">
              <div className="food-box">
                <div key={meal.id}>
                  <img
                    src={meal.image}
                    alt=""/>
                </div>

                <div className="name-box">
                  <h2>{meal.name}</h2>
                </div>

                <div className="description-box">
                  <p>{meal.description}</p>
                </div>

                <div className="price-box">
                  <strong>&#8358;{meal.price}</strong>
                </div>

                <div className="action-box">
                  <h3
                    onClick={() => onAdd(meal)}
                    style={{ color: "limegreen" }}
                  >
                    {meal.action}
                  </h3>
                 
                </div>

                <div className="details-box">
                  <h4> <Modal /></h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default DashBoard;
