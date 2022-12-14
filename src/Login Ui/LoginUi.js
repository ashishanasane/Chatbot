import './LoginUi.css';
import profile from "./../image/a.png";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
function LoginUi() {
  const navigate= useNavigate();
  const[input,setInput] = useState({
    username:"",
    password:""
  });
   const handleLogin=(e)=> {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(input.username === loggeduser.username && input.password === loggeduser.password)
    {
      navigate("/homepage");
    }
    else{
      alert("Wrong Username Or Password,Please Enter Correct Username and Password..");
    }
   };
  return (
    <form onSubmit= {handleLogin} className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input 
              name='username' 
              value={input.username}
              onChange={(e)=>
              setInput({
                ...input,[e.target.name]:e.target.value,
              })
              }type="text" placeholder="User Name" className="name" />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input
              name='password' 
              value={input.password}
              onChange={(e)=>
              setInput({
                ...input,[e.target.name]:e.target.value,
              })
              } type="password" placeholder="Password" className="name" />
            </div>
            <div className="login-button">
              <button type='submit'>Login</button>
            </div>
            <p className="link">
              <a><Link>Forget Password ?</Link></a> Or <a><Link>Signup</Link></a>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginUi;
