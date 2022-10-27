import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isSignUp, setSignUp] = useState(true);

  const navigate = useNavigate()

  return (
    <div className="Auth">
      {/* ------------------------------left side------------------------------ */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Click It</h1>
          <h6>Click It and explore the world</h6>
        </div>
      </div>
      {/* -----------------------right side--------------------------------- */}

      <div className="a-right">
        <form action="" className="infoForm authForm">
          <h3>{isSignUp ? "Signup" : "Log in"}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
              />
            </div>
          )}

          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Password"
              className="infoInput"
              name="password"
            />

            {isSignUp && (
              <input
                type="text"
                placeholder="Confirm Password"
                className="infoInput"
                name="confirmpass"
              />
            )}
          </div>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => { setSignUp((prev) => { return !prev }) }}

            >


              {isSignUp
                ? "Already have an account ? Login"
                : " Don't have an account Sign Up"}
            </span>
            <button onClick={() => {
              !isSignUp ?  navigate('/home') : navigate()
            }} className="button infoButton" type="submit">
              {isSignUp ? "Signup" : "Login"}
            </button>
          </div>
        </form>
      </div>

      {/* <LogIn/> */}
      {/* <Signup/> */}
    </div>
  );
};

// function LogIn() {
//    return (
//      <div className="a-right">
//        <form className="infoForm authForm">
//          <h3>Log In</h3>

//          <div>
//            <input
//              type="text"
//              placeholder="Username"
//              className="infoInput"
//              name="username"
//            />
//          </div>

//          <div>
//            <input
//              type="password"
//              className="infoInput"
//              placeholder="Password"
//              name="password"
//            />
//          </div>

//          <div>
//              <span style={{ fontSize: "12px" }}>
//                Don't have an account Sign up
//              </span>
//            <button className="button infoButton">Login</button>
//          </div>
//        </form>
//      </div>
//    );
//  }

// function Signup(){
//    return(
//       <div className="a-right">
//          <form action="" className="infoForm authForm">

//             <h3>Signup</h3>
//             <div>
//                <input type="text" placeholder='First Name' className='infoInput' name='firstname' />
//                <input type="text"  placeholder='Last Name' className='infoInput' name='lastname'/>
//             </div>
//             <div>
//                   <input type="text" placeholder='Username' className='infoInput' name='username' />
//                </div>
//                <div>
//                   <input type="text" placeholder='Password' className='infoInput' name='password' />
//                   <input type="text"  placeholder='Confirm Password' className='infoInput' name='confirmpass'/>
//                </div>
//                <div>
//                   <span style={{fontSize:'12px'}}>Already have an account ? Login</span>
//                   <button className="button infoButton" type='submit'>Signup</button>
//                </div>
//          </form>
//       </div>
//    )
// }

export default Auth;
