import './App.css';
import NavBar from './components/NavBar';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import CategoryRecipes from './components/CategoryRecipes';
import RecipeCard from './components/RecipeCard';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Error from './components/Error';

function App() {
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch("/me")
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    })
  }, []);

  function errorRender() {
    if (errors instanceof Array) {
      return errors.map((error) => <Error key = {error} error = {error} />);
    } else {
      return null;
    }
  }


  return (
    <div className="App">
      <NavBar setUser = {setUser} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route path="/login" >
          <Login 
          setUser = {setUser}
          username = {username}
          setUsername = {setUsername}
          password = {password}
          setPassword = {setPassword}
          setErrors = {setErrors}
          errorRender = {errorRender()}
          />
        </Route>
        <Route path="/categories/:id">
          <CategoryRecipes />
        </Route>
        <Route path="/recipes/:id">
          <RecipeCard />
        </Route>
        <Route path="/signup">
          <SignUp 
          setUser = {setUser}
          username = {username}
          setUsername = {setUsername}
          password = {password}
          setPassword = {setPassword}
          setErrors = {setErrors}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
