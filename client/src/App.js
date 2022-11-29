import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
// import logo from './logo.svg'
import './App.css'
import LoginContainer from './components/LoginFolder/LoginContainer'
import NavBar from './components/NavBar'
import Home from './components/Home'
import RestaurantDetail from './components/SearchFolder/RestaurantDetail'
import MyBookmarks from './components/MyBookmarksFolder/MyBookmarks'
import AddBookmarkNote from './components/MyBookmarksFolder/AddBookmarkNote'
import EditBookmarkCard from './components/MyBookmarksFolder/EditBookmarkCard'
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
// automatically login if user_id is in session, load home page
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((userData) => {
          setUser(userData)
          fetchRestaurantBookmarks();
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
  // useEffect(() => {
  //   fetch("bookmarks").then((res) => {
  //     if (res.ok) {
  //       res.json().then((userData) => {
  //         setMyBookmarks(userData)
  //       });
  //     }
  //   });
  // }, [])


// console.log(user)
// console.log(updateAfterBookmark)
// console.log(restaurantBookmarks)
  // console.log(myBookmarks)
  if (!user) return <LoginContainer setUser={setUser} />

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <Switch>

        <Route exact path="/">
          <Home yelp={yelp} updateRestaurant={updateRestaurant} setUpdateRestaurant={setUpdateRestaurant}/>
        </Route>

        <Route exact path="/restaurants/:id">
          <RestaurantDetail user={user} yelp={yelp} setUpdateAfterBookmark={setUpdateAfterBookmark} updateRestaurant={updateRestaurant} setUpdateRestaurant={setUpdateRestaurant} />
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

        <Route exact path="/about">
          <About/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
