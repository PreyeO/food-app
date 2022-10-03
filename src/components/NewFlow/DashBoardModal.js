import React from 'react';
import {AiOutlineHome, AiOutlineUser, AiOutlineGift,AiOutlineShoppingCart, AiOutlineCloseSquare} from 'react-icons/ai';
import { StyledDashBoardModal } from '../../Styles/DashBoardModalStyle';
import { NavLink } from "react-router-dom";

const DashBoardModal = () => {
  return (
    <StyledDashBoardModal>
      <div className="modalss">
        
      <NavLink to='/dashboard'><AiOutlineCloseSquare style={{ width: 267, height: 30 }}/></NavLink>
        <span>
        <div className="fahome">
          <AiOutlineHome style={{ width: 267, height: 30 }} />
            <h2>
              <span>Dashboard</span>
            </h2>
          </div>

          <div className="fauser">
          <AiOutlineUser style={{ width: 267, height: 30 }}/>
            <h2>
              <span>Myprofile</span>
            </h2>
          </div>

          <div className="fagift">
          <AiOutlineGift style={{ width: 267, height: 30 }} />
          <h2>
            <span>Orders</span>
          </h2>

            <input type="text" name="text" placeholder={0} id="fagift" />
          </div>

          <div className="facart">
          <AiOutlineShoppingCart style={{ width: 100, height: 30 }}>
          </AiOutlineShoppingCart>
            <h2>
              <span>Cart</span>
            </h2>
            <input type="text" name="text" placeholder={0} id="facart" />
          </div>
        </span>
        </div>
       </StyledDashBoardModal>
       
  )
}

export default DashBoardModal