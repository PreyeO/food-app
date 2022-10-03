import React from "react";
import { ToastContainer, toast } from "react-toastify";
import DashBoardModal from "./DashBoardModal";
import { AiOutlineCloseCircle} from 'react-icons/ai';
import { NavLink } from "react-router-dom";




const CheckOut = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
 
    toast.success("Thank you! money recieved");
    setInterval(() => {
      window.location = "/dashboard"
    }, 1500);

  }
  document.body.style.backgroundColor='white'


  return (
    <>
    <div className="checks">
     <span>
        <NavLink to='/dashboard'><AiOutlineCloseCircle style={{ width: 100, height: 30, color:'#00302e'}}/>
        </NavLink>
      </span>
      </div>
    <DashBoardModal />
    <div className="checkout">
        <ToastContainer />
      <h1>Checkout</h1>
      <div className="checkouts">
        <form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <input type="text" name="text" placeholder="Card Number"></input>
          <input type="text" name="text" placeholder="Exp Date"></input>
          <input type="text" name="text" placeholder="CVV/CVV2"></input>
          <input type="text" name="text" placeholder="Card Pin"></input>
          <button onClick={handleSubmit}>Make Payment</button>
        </form>
      </div>
      </div>
    </>
  );
};

export default CheckOut;
