import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './redux/userAction';

const NavBar = () => {

  const user = useSelector(state => state.users.username);
  const dispatch = useDispatch();

  const linkStyles = {
    display: "inline-block",
    width: "140px",
    padding: "5px 5px",
    margin: "0px 5px 5px",
    background: "rgb(25, 184, 205)",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    fontSize: "20px"
  }

  const helloUserStyle = {
    display: "inline-block",
    padding: "5px 5px",
    margin: "0px 5px 5px",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    position: "absolute",
    top: "35px",
    right: "30px",
    width: "300px"
  }

  let history = useHistory()

  function handleSignoutClick() {
    dispatch(logout())
    history.push("/-login")
  }

  return (
    <div>
      <NavLink style={linkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={linkStyles} to="/-categories">
        Categories
      </NavLink>
      { user ? (
        <>
        <NavLink style={linkStyles} to="/-recipe_create">
        Add Recipe
        </NavLink>
          <button style={linkStyles} onClick = {handleSignoutClick} >Sign out</button>
          <p style={helloUserStyle}>Hello {user}</p>
        </>
      ) : (
        <NavLink style={linkStyles} to="/-login">
        Login
      </NavLink>
      )
    }
    </div>
  )
}

export default NavBar