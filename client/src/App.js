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
          errors = {errors}
          setErrors = {setErrors}
          />
        </Route>
        <Route path="/categories/:id">
          <CategoryRecipes />
        </Route>
        <Route path="/recipes/:id">
          <RecipeCard />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
