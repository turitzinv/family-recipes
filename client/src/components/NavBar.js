import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';

const NavBar = ({ setUser, user }) => {

  let history = useHistory()

  function handleSignoutClick() {
    fetch("/logout", {
      method: "DELETE"
    })
    .then((resp) => {
      if (resp.ok) {
        setUser(null)
        history.push("/login")
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
      { user ? (
      <button onClick = {handleSignoutClick} >Sign out</button>
      ) : (
        <NavLink to="/login">
        Login
      </NavLink>
      )
    }
    </div>
  )
}

export default NavBar