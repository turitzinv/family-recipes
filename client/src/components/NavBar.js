import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = ({ setUser, user }) => {

  function handleSignoutClick() {
    fetch("logout", {
      method: "DELETE"
    })
    .then((resp) => {
      if (resp.ok) {
        setUser(null)
      }
    })
  }


  return (
    <div>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/categories">
        Categories
      </NavLink>
      <NavLink to="/login">
        Account
      </NavLink>
      { user ? (
      <button onClick = {handleSignoutClick} >Sign out</button>
      ) : (
        null
      )
    }
    </div>
  )
}

export default NavBar