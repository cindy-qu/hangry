import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
// import logo from './logo.svg'
import './App.css'
import LoginContainer from './components/LoginFolder/LoginContainer'
import NavBar from './components/NavBar'
import Home from './components/Home'
import RestaurantDetail from './components/SearchFolder/RestaurantDetail'
import TryAgain from './components/SearchFolder/TryAgain'
import MyBookmarks from './components/MyBookmarksFolder/MyBookmarks'
import AddBookmarkNote from './components/MyBookmarksFolder/AddBookmarkNote'
import EditBookmarkCard from './components/MyBookmarksFolder/EditBookmarkCard'
import Calendar from './components/CalendarFolder/Calendar'
import About from './components/About'
import yelp from './components/api/Yelp'



function App() {


  //setting login state
  const [user, setUser] = useState(null)
  const [updateRestaurant, setUpdateRestaurant]=useState([])
  const [updateAfterDelete, setUpdateAfterDelete] = useState(false)
  const [updateBookmarkCard, setUpdateBookmarkCard] = useState([])
  const [updateBookmarkNote, setUpdateBookmarkNote] = useState([])
  const [updateAfterBookmark, setUpdateAfterBookmark] = useState([])
  const [restaurantBookmarks, setRestaurantBookmarks]=useState([])
  const [errors, setErrors] = useState([])

  // location
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [locationError, setLocationError] = useState([])

// automatically login if user_id is in session, load home page
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((userData) => {
          setUser(userData)
          fetchRestaurantBookmarks();
          getUserCoordinates()
        });
      }
    });
  }, [updateAfterBookmark, updateBookmarkCard, updateBookmarkNote, updateAfterDelete])

  const fetchRestaurantBookmarks = () => {
    fetch(`/restaurants`)
    .then((res) => {
      if (res.ok) {
        res.json().then(setRestaurantBookmarks)
      } else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }
    // geolocation
    const geolocationAPI = navigator.geolocation

    const getUserCoordinates = () => {
        if (!geolocationAPI) {
            setLocationError('Geolocation is not available in your browser! Try typing a city')
        } else {
            geolocationAPI.getCurrentPosition((position) => {
                const { coords } = position;
                setLat(coords.latitude);
                setLong(coords.longitude);
            }, (error) => {
                setLocationError('Sorry! Something went wrong getting your location!')
            })
        }

    }
    // console.log(lat, long)

  if (!user) return <LoginContainer setUser={setUser} />

  return (
    <div className="App"  >
      <NavBar user={user} setUser={setUser}/>
      <Switch>

        <Route exact path="/">
          <Home yelp={yelp} lat={lat} long={long} updateRestaurant={updateRestaurant} setUpdateRestaurant={setUpdateRestaurant}/>
        </Route>

        <Route exact path="/restaurants/:id">
          <RestaurantDetail user={user} yelp={yelp} setUpdateAfterBookmark={setUpdateAfterBookmark} updateRestaurant={updateRestaurant} setUpdateRestaurant={setUpdateRestaurant} />
        </Route>

        <Route exact path="/tryagain">
          <TryAgain user={user} yelp={yelp} setUpdateAfterBookmark={setUpdateAfterBookmark} updateRestaurant={updateRestaurant} setUpdateRestaurant={setUpdateRestaurant} />
        </Route>


        <Route exact path="/myBookmarks">
          <MyBookmarks restaurantBookmarks={restaurantBookmarks} user={user} setUpdateAfterDelete={setUpdateAfterDelete}/>
        </Route>

        <Route exact path="/myBookmarks/:id">
          <EditBookmarkCard
            user={user}
            setUpdateBookmarkCard={setUpdateBookmarkCard}
          />
        </Route>
        <Route exact path="/addNote/:id">
          <AddBookmarkNote
            user={user}
            setUpdateBookmarkNote={setUpdateBookmarkNote}
          />
        </Route>

        <Route exact path="/createEvent/:id">
          <Calendar
            user={user}
          />
        </Route>

        <Route exact path="/about">
          <About/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
