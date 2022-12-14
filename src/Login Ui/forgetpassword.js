import './forgetpassword.css';
// import profile from "./../image/a.png";
import email from "./../image/email.jpg";
import pass from "./../image/pass.png";
function Forgetpass() {
  return (
    <div className="forget-main">
      <div className="forget-sub-main">
        <div>
          <div>
            <h1>FORGET PASSWORD</h1>
            <div>
                <p>Enter Your Email Address</p>
              <img src={email} alt="email" className="forget-email" />
              <input type="text" placeholder="Email Address" className="forget-name" />
            </div>
            <div className="forget-second-input">
              <img src={pass} alt="pass" className="forget-email" />
              <input type="password" placeholder="Change Password" className="forget-name" />
            </div>
            <div className="forget-second-input">
              <img src={pass} alt="pass" className="forget-email" />
              <input type="text" placeholder="Confirm Password" className="forget-name" />
            </div>
            <div className="forget-login-button">
              <button>Change Password</button>
            </div>
            <div className="forget-login-button">
              <button>Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgetpass;
