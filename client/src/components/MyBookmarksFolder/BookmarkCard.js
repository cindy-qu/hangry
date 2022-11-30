import React from 'react'
import { Link } from 'react-router-dom'

const BookmarkCard = ({note_id, user_id, bookmark_id, restaurant_name, personal_note, setUpdateAfterDelete}) => {
  

  function handleDelete(){
        fetch(`/restaurants/${bookmark_id}`, {
            method: "DELETE",
        })
        .then(setUpdateAfterDelete)
    }

  const showAddButton = personal_note?.personal_note.length > 0 ? "hidden" : "" 
  const showEditButton = personal_note?.personal_note.length > 0 ? "" : "hidden" 

  return (
    <div>
        <p>{restaurant_name}</p>
       
        <p>{personal_note?.personal_note}</p>

       <br ></br>

        <Link to={`addNote/${bookmark_id}`}>
          <button className= {showAddButton} >Add Note</button>
        </Link>

      <Link to={`myBookmarks/${note_id}`}>
        <button className= {showEditButton}> Edit Note</button>
      </Link>

        <button onClick={handleDelete}>Delete Boomark</button>
    </div>
  )
}

export default BookmarkCard