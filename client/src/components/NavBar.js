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
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/myBookmarks">My Bookmarks</NavLink>
        <NavLink to="/about">About</NavLink>
        
        <span>Hello {user.username}</span>
        <button onClick={handleLogoutUser}>Logout</button>
    </div>
  )
}

export default NavBar