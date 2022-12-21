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
import EditComment from './components/EditComment';
import AddRecipe from './components/AddRecipe';
import EditRecipe from './components/EditRecipe';
import { login } from './components/redux/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { currentUser } from './components/redux/userAction';
import { signup } from './components/redux/userAction';
import { allRecipes } from './components/redux/recipesAction';
import EditRecipePhoto from './components/EditRecipePhoto';


function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [allCategories, setAllCategories] = useState([])
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/categories")
    .then((resp) => resp.json())
    .then((categories) => setAllCategories(categories))
  }, [])

  useEffect(() => {
    fetch("/users")
      .then((resp) => resp.json())
      .then((pulledUsers) => setUsers(pulledUsers));
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();
  const requesting = useSelector(state => state.requesting);


  function handleLogin(event) {
    event.preventDefault();
    dispatch(login({
      username: username,
      password: password 
    }, 
    history ))
    setUsername("")
    setPassword("")
  }

  function handleSignUp(event) {
      event.preventDefault();
      dispatch(signup({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation
      },
      history))
  }

  useEffect(() => {
    dispatch(currentUser())
  }, [dispatch]);

  useEffect(() => {
    dispatch(allRecipes())
  }, [dispatch]);

  if(requesting) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <h1 id="family_recipes_header">Family Recipes 🍽️</h1>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/-categories">
          <Categories allCategories={allCategories} />
        </Route>
        <Route path="/-login" >
          <Login 
          username = {username}
          setUsername = {setUsername}
          password = {password}
          setPassword = {setPassword}
          handleLogin = {handleLogin}
          />
        </Route>
        <Route path="/-categories/:id">
          <CategoryRecipes  />
        </Route>
        <Route path="/-recipe_create">
          <AddRecipe />
        </Route>
        <Route path="/-recipes/:id">
          <RecipeCard users = {users} />
        </Route>
        <Route path="/-signup">
          <SignUp 
          username = {username}
          setUsername = {setUsername}
          password = {password}
          setPassword = {setPassword}
          handleSignUp= {handleSignUp}
          passwordConfirmation = {passwordConfirmation}
          setPasswordConfirmation = {setPasswordConfirmation}
          />
        </Route>
        <Route path="/-comments/:id">
          <EditComment />
        </Route>
        <Route path="/-editrecipe/:id">
          <EditRecipe />
        </Route>
        <Route path="/-editrecipephoto/:id">
            <EditRecipePhoto />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
