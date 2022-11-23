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
    <div className='signup-page'>
    <form className='signup-form' onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>

    <ul>{formErrorMsg}</ul>

    </div>
  )
}

export default Signup