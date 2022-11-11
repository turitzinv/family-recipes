import React, { useState } from 'react'
import Error from './Error';
import { useHistory } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

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
      } else {
        resp.json().then((err) => setErrors(err.errors))
      }
    })
  }

  function errorRender() {
    if (errors instanceof Array) {
      return errors.map((error) => <Error key = {error} error = {error} />);
    } else {
      return null;
    }
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
        {errorRender()}
      </form>
    </div>
  )
}

export default Login