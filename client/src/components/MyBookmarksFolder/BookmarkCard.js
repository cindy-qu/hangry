import React from 'react'
import { Link } from 'react-router-dom'

const BookmarkCard = ({bookmark_id, personal_note, restaurant_name, setUpdateAfterDelete}) => {
    function handleDelete(){
        fetch(`/bookmarks/${bookmark_id}`, {
            method: "DELETE",
        })
        .then(setUpdateAfterDelete)
    }
  return (
    <div>
        <p>{personal_note}</p>
        <p>{restaurant_name}</p>
        <Link to={`myBookmarks/${bookmark_id}`}>
        <button className= "edit-btn">Edit</button>
      </Link>
        <button onClick={handleDelete}>Delete Boomark</button>
    </div>
  )
}

export default BookmarkCard