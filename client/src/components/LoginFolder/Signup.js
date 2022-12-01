import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Signup = ({ setUser }) => {
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
              <h1>Sign Up</h1>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br></br>
              <br></br>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <ul>{formErrorMsg}</ul>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>  
    </div>  
  )
}

export default Signup