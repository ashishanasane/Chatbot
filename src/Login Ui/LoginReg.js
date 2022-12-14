import './LoginReg.css';
import profile from "./../image/a.png";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function LoginReg() {const navigate=useNavigate();
  const[input,setInput] =useState({
    name:"",
    username:"",
    email:"",
    password:""
  });
  // to store value in local storage.
  const handleSumit=(e)=> {
    e.preventDefault();
    localStorage.setItem("user",JSON.stringify(input));
    navigate("/")
  };
  return (
    <form onSubmit={handleSumit} className="reg-main">
      <div className="reg-sub-main">
        <div>
          <div>
            <h1 className='reg-login-heading'>REGISTER</h1>
            <div className="reg-second-input">
              <img src={email} alt="firstname" className="reg-email" />
              <input 
              name='name' 
              value={input.name}
              onChange={(e)=>
              setInput({
                ...input,[e.target.name]:e.target.value,
              })
              } type="text" placeholder="Name" className="reg-name" />
            </div >
            <div className="reg-second-input">
              <img src={email} alt="email" className="reg-email" />
              <input
              name='email' 
              value={input.email}
              onChange={(e)=>
              setInput({
                ...input,[e.target.name]:e.target.value,
              })
              } type="text" placeholder="Email" className="reg-name" />
            </div>
            <div className="reg-second-input">
              <img src={pass} alt="DOB" className="reg-email" />
              <input type="date" placeholder="DOB" className="reg-name" />
            </div>
            <div className="reg-second-input">
              <img src={email} alt="email" className="reg-email" />
              <input
              name='username' 
              value={input.username}
              onChange={(e)=>
              setInput({
                ...input,[e.target.name]:e.target.value,
              })
              } type="text" placeholder="User Name" className="reg-name" />
            </div>
            <div className="reg-second-input">
              <img src={pass} alt="pass" className="reg-email" />
              <input 
              name='password' 
              value={input.password}
              onChange={(e)=>
              setInput({
                ...input,[e.target.name]:e.target.value,
              })
              }
              type="password" placeholder="Password" className="reg-name" />
            </div>
            <div className="reg-second-input">
              <img src={pass} alt="pass" className="reg-email" />
              <input type="confirmpassword" placeholder="Confirm Password" className="reg-name" />
            </div>
            <div>
            <input type="checkbox" id='reg-termscondition' name='termscondition'/>
            <label for="termscondition">I accept terms & condition.</label><br></br>
            </div>
            <div className="reg-login-button">
              <button type='submit'>Create Account</button>
            </div>
            
            <div className="reg-login-button">
              <button>Back</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginReg;