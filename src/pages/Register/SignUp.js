import signuppics from "../../assets/signuppics.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'

const SignUp = () => {
  //using useState for user data storages
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(form);
  //creating a fnx to capture user data entered
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  //creating a fnx to save user data captured
  //preventdefault method prevents form from reloarding
  const handleSubmit = (event) => {
    event.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(form));
  
    toast.success("Hurray! signup was successful");

    setInterval(() => {
      window.location = "/login";
    }, 1500);

    if (
      form.name?.length <= 2 &&
      form.email.length <= 2 
    ) {

      toast.error("form cannot be empty");

      setInterval(() => {
        window.location = "/signup";
      })
    }
  };
  document.body.style.backgroundColor='white'
  const [state, setState] = useState(false);
  const toggleBtn=() => {
    setState(prevState => !prevState)
  }

  return (
    <>
    <div className='signup'>
    <div className='signup'>
      <ToastContainer />
      <img
        className="image"
        src={signuppics}
        alt="signup bckground"
        style={{ height: 900, width: 764, position: "absolute" }}
      ></img>
      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          <h2>Welcome to Lilies!</h2>
         
          <input
            type="text"
            name="name"
            placeholder="Your First Name"
            id="textinput1"
            onChange={handleChange}/>
          <input
            type="email"
            name="email"
            placeholder="Your Email address"
            id="textinput2"
            onChange={handleChange}
          />

       <input
            type={state ? "text" :"password"}
            name="password"
            placeholder="Your Password"
            id="textinput3"
            onChange={handleChange}></input>
          
          <button type="submit" className="btns2" id="login-signup">
            SIGN UP
          </button>
        </form>
        <div className="iconss">
            <button onClick={toggleBtn}type="submit">
              {
              state? <AiOutlineEyeInvisible />: <AiOutlineEye /> 
            }
              </button></div>
        <div className="questions-signup">
          <h3 id="question-text">Already have an account?</h3>
          <Link to="/login">
            <h3 id="question-texts">LOGIN</h3>
          </Link>
        </div>
      </div>
      </div>
      </div>
      </>
  );
};

export default SignUp;
