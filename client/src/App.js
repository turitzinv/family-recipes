import './App.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import CategoryRecipes from './components/CategoryRecipes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route path="/categories/:id">
          <CategoryRecipes />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
