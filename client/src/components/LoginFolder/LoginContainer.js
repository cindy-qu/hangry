import React, { useState } from "react"
import { Link, Route, Switch  } from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"

const LoginContainer = ({ setUser }) => {

    const [showLogin, setShowLogin] = useState(true);

 
  return (
    <div className="login-container">
        <div className="landing-page">
            <h1>Welcome to Hangry</h1>
            <h2>Can't decide where to eat?Let Hangry pick your location<span id="spin"></span></h2>
            <Link to='/login'>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Login!</button>
            </Link>
            {/* <div>
                <div className="loginsignup">
                    <Login setUser={setUser}/>
                </div>
            </div> */}
            <Link to='/signup'>
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">Sign Up!</button>
            </Link>
            <div>
                <div className="loginsignup">
                    <Login setUser={setUser}/>
                </div>
            </div>
            <div>
                <div className="loginsignup">
                    <Signup setUser={setUser}/>
                </div>
            </div>
        </div>

        {/* {showLogin ? (
            <div>
                <div className="loginsignup">
                    <Login setUser={setUser}/>
                </div>
            </div>

        ) : (

            <div>
                <div className="loginsignup">
                    <Signup setUser={setUser}/>
                </div>
            </div>
        )} */}
    </div>
  )
}

export default LoginContainer