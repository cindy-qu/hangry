import React, { useEffect, useState } from 'react'
import BookmarkList from './BookmarkList.js'

const MyBookmarks = ( { restaurantBookmarks, user } ) => {
  const [user2, setUser2] = useState(null)
  const [updateAfterDelete, setUpdateAfterDelete] = useState(false)

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((userData) => {
          setUser2(userData)
        });
      }
    });
  }, [updateAfterDelete])
// console.log(user2?.restaurants)
  return (
    <div >
      <h1>My Bookmarks</h1>
      <BookmarkList 
      user_id={user.id}
      bookmarks={user2?.restaurants}
      setUpdateAfterDelete={setUpdateAfterDelete}
      restaurantBookmarks={restaurantBookmarks}
    
      />
    </div>
  )
}

export default MyBookmarks