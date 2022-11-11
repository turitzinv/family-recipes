import React from 'react'
import { useHistory } from 'react-router-dom';

const Login = ({ setUser, username, setUsername, password, setPassword, setErrors, errorRender }) => {

  let history = useHistory();

  function handleLogin(event) {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then ((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
        history.push("/")
        setUsername("")
        setPassword("")
      } else {
        resp.json().then((err) => setErrors(err.errors))
      }
    })
  }

  return (
    <div>
      <h2>Please Login or Create an Account</h2>
      <form onSubmit = {handleLogin}>
        <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <input 
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log in</button>
        {errorRender}
        <a href="/signup">Create an Account</a>
      </form>
    </div>
  )
}

export default Login