import React, { useState } from "react"
import { Link, Route, Switch  } from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"

const LoginContainer = ({ setUser }) => {

    const [showLogin, setShowLogin] = useState(true);

 
  return (
    <div className="login-container">
        <div className="landing-page">
            <h1 id="landing-header">Hangry</h1>
            
            
            <h2>Can't decide where to get ...
                <span className="text-1">breakfast</span>
                <span className="text-2">lunch</span>
                <span className="text-3">dinner</span>  
                <span className="text-4">tacos</span>  
                <span className="text-5">sushi</span>  
                <span className="text-6">pizza</span>
                <span className="text-7">sandwiches</span>  
                <span className="text-8">ramen</span>   

                {/* <span className="text-location" >location!</span> */}
            </h2>
            <h2>Let Hangry decide for you!</h2>
            <Link to='/login'>
                <button className="btn btn-primary btn-lg" data-bs-toggle="modal" id="landing-button" data-bs-target="#exampleModal" >Log In</button>
            </Link>
            {/* <div>
                <div className="loginsignup">
                    <Login setUser={setUser}/>
                </div>
            </div> */}
            <Link to='/signup'>
                <button className="btn btn-primary btn-lg" id="landing-button" data-bs-toggle="modal" data-bs-target="#exampleModal2">Sign Up</button>
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