import { Route, Switch } from 'react-router-dom'
// import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import RestaurantDetail from './components/SearchFolder/RestaurantDetail'
import MyBookmarks from './components/MyBookmarksFolder/MyBookmarks'
import About from './components/About'
import yelp from './components/api/Yelp'



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home yelp={yelp}/>
        </Route>
        <Route exact path="/restaurants/:id">
          <RestaurantDetail yelp={yelp} />
        </Route>
        <Route exact path="/myBookmarks">
          <MyBookmarks/>
        </Route>

        <Route exact path="/about">
          <About/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
