import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'

const NavBar = ( {user, setUser }) => {

  const history = useHistory()

  function handleLogoutUser(){
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setUser(null)
        history.push('/')
      }
    })
  }
  return (
    <div className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Hangry</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/myBookmarks">Bookmarks</NavLink>
            <NavLink className="nav-link" to="/myCalendar">Calendar</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
            

          </div>
        </div>
        <span className="welcome">Hello, {user.username}</span>
            <button className="btn btn-secondary" onClick={handleLogoutUser}>Logout</button>
      </div>
    </div>
  )
}

export default NavBar