import React from 'react';
import { useHistory } from 'react-router-dom';

const SignUp = ({ setUser, username, setUsername, password, setPassword, setErrors, errorRender }) => {

  let history = useHistory()

  function handleSignUp(event) {
    event.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then(setUser);
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
      <h2>Create a new Username and Password</h2>
      <form>
        <input 
        type="text"
        placeholder="New Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <input 
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick = {handleSignUp}>Create Account</button>
        {errorRender}
      </form>
    </div>
  )
}

export default SignUp