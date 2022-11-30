import React, { useState } from "react"
import { Link } from "react-router-dom"
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
                <button onClick={() => setShowLogin(true)}>Login!</button>
            </Link>

            <Link to='/signup'>
                <button onClick={() => setShowLogin(false)}>Sign Up!</button>
            </Link>
        </div>

        {showLogin ? (
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
        )}
    </div>
  )
}

export default LoginContainer