import React from "react";
import DashBoardModal from "./DashBoardModal";
import { AiOutlineCloseCircle} from 'react-icons/ai';
import { NavLink } from "react-router-dom";


const Orders = ({ meals, onRemove }) => {

  document.body.style.backgroundColor='white'




  return (
    <>
    <div className="order">
     <div className="orders">
      <h1>Your orders</h1>
      <span>
        <NavLink to='/dashboard'><AiOutlineCloseCircle style={{ width: 100, height: 30, color:'#00302e'}}/>
        </NavLink>
      </span>
    </div>
    <div className="dash-board">
    <DashBoardModal />
    </div>
      <div className="cart-sections">

          {meals.length > 0 ? (
            <>
              <div className="item-containers">
                <h2>Item</h2>
                <div className="quantity">
                  <strong id="qty">QTY</strong>
                  <strong>Price</strong>
                  <strong>Status</strong>
                </div>
              </div>
              <div className="order-style">
              {meals.map((meal) => {
                return (
                  <>
                    <div key={meal.id} className="items">
                      <div className="img">
                        <img
                          src={meal.image}
                          alt=""
                          style={{ width: 90, height: 90, borderRadius: 400 }}
                        />
                        <div className="title">
                          <h2>{meal.name}</h2>
                          <h3 onClick={() => onRemove(meal)}>
                            {meal.remaction}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="quantity">
                      <strong>{meal.quantity}</strong>
                      <strong>&#8358;{meal.price}</strong>
                      <strong>{meal.status}</strong>
                    </div>
                  
                  </>
                );
              })}
              </div>
            </>
          ) : (
            "Your order is currently empty..."
          )}
        </div>
        </div>
    </>
  );
};

export default Orders;
