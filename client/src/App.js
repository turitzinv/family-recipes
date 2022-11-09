import './App.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
