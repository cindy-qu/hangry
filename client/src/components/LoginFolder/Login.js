import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Login = ({ setUser }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    const history = useHistory()

    // submitting login
    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: username, password: password }),
        }).then((res) => {
            if (res.ok) {
                res.json().then((userLogin) => {
                    setUser(userLogin)
                    history.push('/')
                })
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        });
    }

    const formErrorMsg = errors.map((err) => (
        <li key={err}>{err}</li>
    ))

  return (
    <div  className="modal fade" data-backdrop="false" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">

                    <form onSubmit={handleSubmit}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-8" id="exampleModalLabel">Login</h1>
                        
                    </div>
                    <div className="form-floating mb-3">
                     <input className="form-control" id="floatingInput" placeholder="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                     <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input  className="form-control" id="floatingInput" placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <label htmlFor="floatingInput">Password</label>
                    </div>
                        <ul>{formErrorMsg}</ul>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary" id="loginbutton" data-bs-dismiss="modal" >Log In</button>
                            <button type="button" className="btn btn-secondary" id="loginclose" data-bs-dismiss="modal">Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login