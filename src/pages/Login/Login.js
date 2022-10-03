import loginpics from "../../assets/loginpics.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import React, { useState } from "react";
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';

const Login = () => {
  const [userLoginData, setuserLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setuserLoginData({
      ...userLoginData,
      [event.target.name]: event.target.value,
    });
    console.log(userLoginData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    let user = JSON.parse(sessionStorage.getItem("user"));

    console.log(user);

    if (
      userLoginData?.email === user?.email &&
      userLoginData?.password === user?.password
    ) {
      console.log("true");

      toast.success("login successful");

      setInterval(() => {
        window.location = "/dashboard";
      }, 2000); 

    }
  

    else {
      toast.error("user not found, kindly sign-up");
      
      setInterval(() => {
        window.location = "/login"
      }, 1000); 
    }
  };

  const [state, setState] = useState(false);
  const toggleBtn=() => {
    setState(prevState => !prevState)
  }
  document.body.style.backgroundColor='white'
 

  return (
    <div className='login'>
      <div className="login">
        <ToastContainer />
        <img
          className="image"
          src={loginpics}
          alt="login background"
          style={{ backgroundColor: "#e2b887" }}
        />
        <div className="login-container">
           <form onSubmit={handleSubmit}>
          <h2>Welcome Back!</h2>
         
            <input
              type="email"
              name="email"
              placeholder="Your Email address"
              id="textinput1"
              onChange={handleChange}
            />
              <input
              type={state ? "text" :"password"}
              name="password"
              placeholder="Your Password"
              id="textinput2"
              onChange={handleChange}
            />
            <button type="submit" className="btnss" id="login-signup2">
              LOGIN
            </button>
              </form>
              <div className="icons">
            <button onClick={toggleBtn}type="submit">
              {
              state? <AiOutlineEyeInvisible />: <AiOutlineEye /> 
            }
            </button>
            </div>

          <div className="questionss">
            <Link to={"/signup"}>
              <h3 id="quest">Create an account</h3>
            </Link>
            <Link to={"/page404"}>
              <h3 id="questions-text">Forgot password</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
