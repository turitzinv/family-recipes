import React from 'react';
import { useSelector } from 'react-redux';
import Error from './Error';

const SignUp = ({ /*setUser*/ username, setUsername, password, setPassword, /*setErrors*/ /*errorRender*/ passwordConfirmation, setPasswordConfirmation, handleSignUp }) => {
  //const username = useSelector(state => state.users.username)
  //const password = useSelector(state => state.users.password)
 // const passwordConfirmation = useSelector(state =>state.users.password_confirmation)
  const errors = useSelector(state => state.errors)

  //let history = useHistory()

  // function handleSignUp(event) {
  //   event.preventDefault();
  //   fetch("/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ username,
  //       password,
  //       password_confirmation: passwordConfirmation }),
  //   }).then((resp) => {
  //     if (resp.ok) {
  //       resp.json().then(setUser);
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
      <h2 className="login-signup-headers">Create a new Username and Password</h2>
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
        <input 
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