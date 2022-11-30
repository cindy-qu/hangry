import React from 'react'
import BookmarkCard from './BookmarkCard.js'

const BookmarkList = ( {restaurantBookmarks2, restaurantBookmarks, bookmarks, setUpdateAfterDelete, user_id } ) => {
// console.log(bookmarks)

   const renderBookmarkCard = bookmarks?.map((bookmark)=>{
    return (
        <BookmarkCard 
        key={bookmark.id}
        bookmark_id={bookmark.id}
        restaurant_name={bookmark.restaurant_name}
        personal_note={bookmark.bookmarks[0]}
        note_id = {bookmark?.bookmarks[0]?.id}
        setUpdateAfterDelete={setUpdateAfterDelete}
        user_id={user_id}
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