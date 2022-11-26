import React from 'react';
import { useSelector } from 'react-redux';
import Error from './Error';

const Login = ({ /*setUser*/ username, setUsername, password, setPassword, /*setErrors*/ /*errorRender*/ handleLogin }) => {
  //const username = useSelector(state => state.users.username)
  //const password = useSelector(state => state.users.password)
  const errors = useSelector(state => state.errors)

  // function handleLogin(event) {
  //   event.preventDefault();
  //   fetch("/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ username, password }),
  //   }).then ((resp) => {
  //     if (resp.ok) {
  //       resp.json().then((user) => setUser(user))
  //       history.push("/")
  //       setUsername("")
  //       setPassword("")
  //     } else {
  //       resp.json().then((err) => setErrors(err.errors))
  //     }
  //   })
  // }

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
        <a href="/signup">Create an Account</a>
      </form>
    </div>
  )
}

export default Login