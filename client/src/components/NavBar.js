import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';

const NavBar = ({ setUser, user }) => {

  const linkStyles = {
    display: "inline-block",
    width: "162px",
    padding: "15px",
    margin: "10px 9px 20px",
    background: "indigo",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    fontSize: "20px"
  }

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
      <NavLink style={linkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={linkStyles} to="/categories">
        Categories
      </NavLink>
      { user ? (
        <>
        <NavLink style={linkStyles} to="/recipe_create">
        Add Recipe
        </NavLink>
      <button onClick = {handleSignoutClick} >Sign out</button>
      </>
      ) : (
        <NavLink style={linkStyles} to="/login">
        Login
      </NavLink>
      )
    }
    </div>
  )
}

export default NavBar