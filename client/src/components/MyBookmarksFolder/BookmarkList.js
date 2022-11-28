import React from 'react'
import BookmarkCard from './BookmarkCard.js'

const BookmarkList = ( {bookmarks, setUpdateAfterDelete} ) => {

   const renderBookmarkCard = bookmarks.map((bookmark)=>{
    return (
        <BookmarkCard 
        key={bookmark.id}
        bookmark_id={bookmark.id}
        personal_note={bookmark.personal_note}
        restaurant_name={bookmark.restaurant.restaurant_name}
        setUpdateAfterDelete={setUpdateAfterDelete}
        />
    )
   })
  return (
    <div>
        {/* <h1>BookmarkList</h1> */}
        {renderBookmarkCard}
    </div>
  )
}

export default BookmarkList