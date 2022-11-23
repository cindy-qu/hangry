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
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label>Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <label>Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Logging in</button>
        </form>
        <ul>{formErrorMsg}</ul>
    </div>
  )
}

export default Login