import React from 'react';
import { useSelector } from 'react-redux';
import Error from './Error';

const SignUp = ({ username, setUsername, password, setPassword, passwordConfirmation, setPasswordConfirmation, handleSignUp }) => {
  const errors = useSelector(state => state.errors)

  function errorRender() {
    if (errors instanceof Array) {
      return errors.map((error) => <Error key = {error} error = {error} />);
    } else {
      return null;
    }
  }

  return (
    <div>
      <h2 className="login-signup-headers">Create a new Username and Password</h2>
      <form>
        <input 
        className="login-signup-inputs"
        type="text"
        placeholder="New Username"
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
        <input 
        className="login-signup-inputs"
        type="password"
        placeholder="Password Confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        
        <button className="btn btn-primary" onClick = {handleSignUp}>Create Account</button>
        {errorRender()}
      </form>
    </div>
  )
}

export default SignUp