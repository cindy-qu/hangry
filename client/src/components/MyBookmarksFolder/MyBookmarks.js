import React from 'react'
import BookmarkList from './BookmarkList.js'

const MyBookmarks = ( {user, setUpdateAfterDelete} ) => {

  return (
    <div>
      <h1>My Bookmarks</h1>
      <BookmarkList 
      bookmarks={user.bookmarks}
      setUpdateAfterDelete={setUpdateAfterDelete}
      />
    </div>
  )
}

export default MyBookmarks