import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Signup = ({ setUser, getUserCoordinates }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username, password: password })
        }).then((res) => {
            if (res.ok) {
                res.json().then((userSignup) => {
                    setUser(userSignup)
                    getUserCoordinates()
                    history.push('/')
                });
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        });
    }

    const formErrorMsg = errors.map((err) => (
        <li key={err}>{err}</li>
      ))

  return (
    <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">  
            <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h1 className="modal-title fs-8" id="exampleModalLabel">Sign Up</h1>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control" 
                id="floatingInput3" 
                placeholder="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="username">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control" 
                id="floatingInput4" 
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
               <label htmlFor="floatingInput">Password</label>
            </div>
              <ul>{formErrorMsg}</ul>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary" id="loginbutton2" data-bs-dismiss="modal">Sign Up</button>
                <button type="button" className="btn btn-secondary" id="loginclose2" data-bs-dismiss="modal">Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>  
    </div>  
  )
}

export default Signup