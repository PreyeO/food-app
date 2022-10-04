import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle} from 'react-icons/ai';
import DashBoardModal from "../DashBoardModal";
import { NavLink } from "react-router-dom";





const Cart = ({ meals, onRemove}) => {
  const totalPrice = meals.reduce((a, c) => a + c.price * c.quantity, 0);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/checkout");
  };
  document.body.style.backgroundColor='white'
  return (
    <>
    <div className="carts">
    <h1>Your Cart</h1>
    <span><NavLink to='/dashboard'><AiOutlineCloseCircle style={{ width: 100, height: 30, color:'#00302e'}}/>
    </NavLink>
    </span>
    </div>
    <DashBoardModal />
    <div className="cart">
      <div className='cart-container'>
      
        
          {meals.length > 0 ? (
            <>
              <div className="item-containers">
                <h2>Item</h2>
                <div className="quantity">
                  <strong id="qty">QTY</strong>
                  <strong>Unit Price</strong>
                  <strong>Sub-total</strong>
                </div>
              </div>

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
                          <h3 onClick={() => onRemove (meal)}>
                            {meal.remaction}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="quantity">
                      <strong>{meal.quantity}</strong>
                      <strong>&#8358;{meal.price}</strong>
                      <strong>&#8358;{meal.quantity * meal.price}</strong>
                    </div>
                  </>
                );
              })}
              <div className="totals">
                <p>
                  Total: &nbsp;<strong>&#8358;{totalPrice.toFixed(2)}</strong>
                </p>
              </div>
              <div className="btns4">
                <button onClick={handleSubmit}>Checkout</button>
              </div>
            </>
          ) : (
            "Your cart is currently empty..."
          )}
          </div>
        </div>
        </>
  );
};

export default Cart;
