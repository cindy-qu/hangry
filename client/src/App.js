import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
// import logo from './logo.svg'
import './App.css'
import LoginContainer from './components/LoginFolder/LoginContainer'
import NavBar from './components/NavBar'
import Home from './components/Home'
import RestaurantDetail from './components/SearchFolder/RestaurantDetail'
import MyBookmarks from './components/MyBookmarksFolder/MyBookmarks'
import About from './components/About'
import yelp from './components/api/Yelp'



function App() {


  //setting login state
  const [user, setUser] = useState(null)
  const [updateRestaurant, setUpdateRestaurant]=useState([])

// automatically login if user_id is in session, load home page
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((userData) => {
          setUser(userData)
        });
      }
    });
  }, [])

  // console.log(user)
  if (!user) return <LoginContainer setUser={setUser} />

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <Switch>

        <Route exact path="/">
          <Home yelp={yelp} updateRestaurant={updateRestaurant} setUpdateRestaurant={setUpdateRestaurant}/>
        </Route>

        <Route exact path="/restaurants/:id">
          <RestaurantDetail yelp={yelp} updateRestaurant={updateRestaurant} setUpdateRestaurant={setUpdateRestaurant}/>
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
