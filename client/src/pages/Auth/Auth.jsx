




import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
// import { logIn, signUp } from '../../action/AuthAction'
import { signUp, logIn } from "../../actions/AuthAction";

import Validate from '../../Validation/Validation'

const Auth = () => {

  const dispatch = useDispatch()
  const loading = useSelector((state)=> state.authReducer.loading)
  const [isSignUp,setIsSignUp]  = useState(true);



  const [data,setData] = useState({firstname:"",lastname:"",password:"",confirmpass:"",username:""})
  const [err,setErr] = useState({})

  //password check
  const [confirmPass,setConfirmPass] = useState(true)

  const handleChange = (e) =>{
      // const {name,value} = e.target
         setData({...data , [e.target.name] : e.target.value})
  }


  const handleSubmit = (e)=>{
     
    e.preventDefault();
    setErr(Validate(data))

    if(isSignUp){    
      data.password === data.confirmpass ? dispatch(signUp(data)) : setConfirmPass(false);
    }else{
      dispatch(logIn(data))
    }
  }

// reset 
const resetForm = () =>{
  setConfirmPass(true);
  setData({firstname:"",lastname:"",password:"",confirmpass:"",username:""})
}

  return (
    <div className="Auth">
      {/* left side  */}
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
            <h1>Click It</h1>
           <h6>Click It and explore the world</h6>
            </div>
        </div>
        {/* <SignUp/> */}
        {/* *********************************************login**********right side****************************** */}
        <div className="a-right">
            <form  className="infoForm authForm" onSubmit={handleSubmit}>
              <h3>{isSignUp ? "Sign Up" : "Log In"}</h3>
           {isSignUp &&    <div>
               <div className='validation'>
               <input type="text" placeholder='First Name' 
                 name='firstname' className='infoInput'
                onChange={handleChange} value ={data.firstname} />
                
                {err.firstname && <p style={{color:"red"}}> {err.firstname}</p>}

               </div>
                
                <div className='validation'>
                <input type="text" placeholder='Last Name'
                 className='infoInput' name='lastname'
                  onChange={handleChange} value ={data.lastname}/>
                   
                  {err.lastname && <p style={{color:"red"}}> {err.lastname}</p>}

                </div>
              </div>}

              <div className='validation'>
              <input type="text" placeholder='User Name'
               className='infoInput passInput1' name='username' 
               onChange={handleChange} value ={data.username} />
              
               {err.username && <p style={{color:"red"}}> {err.username}</p>}

              </div>
              <div>

              <div className='validation'>
              {
                isSignUp?<input type="password" placeholder=' password'
                className='infoInput passInput12' name='password' 
                onChange={handleChange} value ={data.password}/> :
                <input 
                 type="password" placeholder=' password'
                className='infoInput passInput' name='password' 

                onChange={handleChange} value ={data.password}/>
              }
               
               {err.password && <p  style={{position:"relative",right:"-50px",color:"red"}}> {err.password}</p>}

              </div>
              <span style={{display : confirmPass ? "none" : "block",
              color:"red",fontSize:"12px",
              alignSelf:"flex-end",
              marginRight:"5px"}}>

                {/* * blocked user */}

              </span>

              <div className='validation'>
              {isSignUp && <input type="password" 
              placeholder='Confirm password'
               className='infoInput passInput12' name='confirmpass' 
               onChange={handleChange} value ={data.confirmpass} />}
               
               {isSignUp?err.confirmpass && <p style={{color:"red"}}> {err.confirmpass}</p>:""}
              </div>

              </div>
              <span style={{display : confirmPass ? "none" : "block",
              color:"red",fontSize:"12px",
              alignSelf:"flex-end",
              marginRight:"5px"}}>

                * confirm password not same

              </span>
              <div>
                <span style={{fontSize:'12px',cursor:"pointer"}} onClick = {()=> {setIsSignUp((prev)=>!prev);resetForm()}} sty>
                  {isSignUp ? "Already you have an account. Login" : "Don't have an account? Sign Up"}
                  </span>
              </div>
              <button className='button infoButton' type='submit' disabled={loading}>
                {loading ? "Loading.." : isSignUp ? "Sign Up" : "Log In"}
              </button>
            </form>
        </div>
    </div>
  )
}





export default Auth



