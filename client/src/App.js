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
import EditComment from './components/EditComment';
import AddRecipe from './components/AddRecipe';
import EditRecipe from './components/EditRecipe';
import { login } from './components/redux/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { currentUser } from './components/redux/userAction';
import { signup } from './components/redux/userAction';


function App() {
  //const [user, setUser] = useState(null)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();
  const requesting = useSelector(state => state.requesting);
  const user = useSelector(state => state.users.user.user)

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

  // useEffect(() => {
  //   fetch("/me")
  //   .then((resp) => {
  //     if (resp.ok) {
  //       resp.json().then((user) => setUser(user));
  //     }
  //   })
  // }, []);

  useEffect(() => {
    dispatch(currentUser())
  }, []);

  if(requesting) {
    return <h1>Loading...</h1>
  }

  let currentUserId

  function ifUser() {
    if (user instanceof Object) {
      return  currentUserId = user.id
    } else {
      return null
    }
  }

  //will have to go into each component that renders errors
  function errorRender() {
    if (errors instanceof Array) {
      return errors.map((error) => <Error key = {error} error = {error} />);
    } else {
      return null;
    }
  }

  ifUser()

  return (
    <div className="App">
      <h1 id="family_recipes_header">Family Recipes 🍽️</h1>
      <NavBar /*setUser = {setUser} user = {user}*/ />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route path="/login" >
          <Login 
          /*setUser = {setUser}*/
          //username = {username}
          setUsername = {setUsername}
          //password = {password}
          setPassword = {setPassword}
          setErrors = {setErrors}
          // errorRender = {errorRender()}
          handleLogin = {handleLogin}
          />
        </Route>
        <Route path="/categories/:id">
          <CategoryRecipes /*user = {user}*/ />
        </Route>
        <Route path="/recipe_create">
          <AddRecipe
          errorRender = {errorRender()}
          setErrors = {setErrors}
          />
        </Route>
        <Route path="/recipes/:id">
          <RecipeCard currentUserId={currentUserId} 
          errorRender = {errorRender()}
          setErrors = {setErrors}
          />
        </Route>
        <Route path="/signup">
          <SignUp 
          // setUser = {setUser}
          // username = {username}
          setUsername = {setUsername}
          // password = {password}
          setPassword = {setPassword}
          // setErrors = {setErrors}
          // errorRender = {errorRender()}
          handleSignUp= {handleSignUp}
          // passwordConfirmation = {passwordConfirmation}
          setPasswordConfirmation = {setPasswordConfirmation}
          />
        </Route>
        <Route path="/comments/:id">
          <EditComment />
        </Route>
        <Route path="/editrecipe/:id">
          <EditRecipe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
