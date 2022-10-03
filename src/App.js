import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Register/SignUp";
import food2 from "./assets/food2.jpg";
import food3 from "./assets/food3.jpg";
import food4 from "./assets/food4.jpg";
import food1 from "./assets/food1.jpg";
import food5 from "./assets/food5.png";
import food6 from "./assets/food6.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard/DashBoard";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import Cart from "./components/NewFlow/Cart/Cart";
import Orders from "./components/NewFlow/Orders";
import CheckOut from "./components/NewFlow/CheckOut";
import Modal from "./components/Modal/Modal";
import Page404 from "./components/NewFlow/Page404";

function App() {
  const data = [
    {
      food: food2,
      name: "Stir fry Pasta",
      description: "Stir fry pasta yada yada good for the Season",
    },
    {
      food: food3,
      name: "Meat Balls",
      description: "Meat Balls yada yada yada good for Season",
    },
    {
      food: food4,
      name: "Burger Meal",
      description: "Burger Meal yada yada yada good for Season",
    },
  ];
  const meals = [
    {
      id: "1",
      image: food2,
      name: "Stir fry Pasta",
      description: "The in-house pasta and chicken by chef Moose",
      price: "5500.00",
      action: "Add to cart +",
      remaction: "remove",
      status: "Delivered",
      more:'A',
    },

    {
      id: "2",
      image: food3,
      name: "Meat Balls",
      description: "The in-house pasta and chicken by chef Moose",
      price: "1000.00",
      action: "Add to cart +",
      remaction: "remove",
      status: "Delivered",
      more:'B',
    },
    {
      id: "3",
      image: food4,
      name: "Burger Meal",
      description: "The in-house pasta and chicken by chef Moose",
      price: "4000.00",
      action: "Add to cart +",
      remaction: "remove",
      status: "Delivered",
      more:'B',
    },

    {
      id: "4",
      image: food1,
      name: "Mixed pasta ",
      description: "The in-house pasta and chicken by chef Moose",
      price: "5000.00",
      action: "Add to cart +",
      remaction: "remove",
      status: "cooking",
      more:'C',
    },
    {
      id: "5",
      image: food5,
      name: "Fruit bread",
      description: "The in-house pasta and chicken by chef Moose",
      price: "2000.00",
      action: "Add to cart +",
      remaction: "remove",
      status: "Delivered",
      more:'D',
    },

    {
      id: "6 ",
      image: food6,
      name: "Curry sauce",
      description: "The in-house pasta and chicken by chef Moose",
      price: "3500.00",
      action: "Add to cart +",
      remaction: "remove",
      status: "cooking",
      more:'E',
    },
  ];



  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist >=0) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: + 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.quantity >= 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };
 




  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home data= {data} />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        
          <Route
            path="/cart"
            element={<Cart meals= {cartItems} onRemove={onRemove} />}
          />

          <Route
            path="/orders"
            element={<Orders meals= {cartItems} onRemove= {onRemove}/>}
          />
          <Route path="/checkout" element= {<CheckOut />} />
          <Route path="*" element= {<Page404 />} />
          <Route path="/dashboard"
            element={
              <DashBoard meals= {meals} onAdd={onAdd} count={cartItems.length}/>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
