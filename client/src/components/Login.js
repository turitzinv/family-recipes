import React from 'react';
import { useSelector } from 'react-redux';
import Error from './Error';

const Login = ({ username, setUsername, password, setPassword, handleLogin }) => {
  const errors = useSelector(state => state.errors)

  function errorRender() {
    if (errors instanceof Array) {
      return errors.map((error) => <Error key = {error} error = {error} />);
    } else {
      return null;
    }
  }

  return (
    <div >
      <h2 className="login-signup-headers">Please Login or Create an Account</h2>
      <form onSubmit = {handleLogin}>
        <input
        className="login-signup-inputs" 
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <input 
        className="login-signup-inputs"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button id="login-button" type="submit" className="btn btn-primary">Log in</button>
        {errorRender()}
        <a href="/#/-signup">Create an Account</a>
      </form>
    </div>
  )
}

export default Login