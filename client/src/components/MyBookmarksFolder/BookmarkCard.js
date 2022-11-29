import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const BookmarkCard = ({user_id, bookmark_id, restaurant_name, personal_note, setUpdateAfterDelete}) => {
  
  console.log(personal_note?.personal_note)
  const [createPersonalNote, setCreatePersonalNote] = useState("Tips, tricks, things to remember") 
  const [restaurantBookmarkDetail, setRestaurantBookmarkDetail] = useState([]);
  const [errors, setErrors] = useState([]);
  function handleDelete(){
        fetch(`/restaurants/${bookmark_id}`, {
            method: "DELETE",
        })
        .then(setUpdateAfterDelete)
    }

    const handleCreateNote = (e) => {
      const formData = {
        personal_note: createPersonalNote,
        user_id: user_id,
        restaurant_id: bookmark_id
      }
    
      fetch(`/bookmarks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
    })

    
    .then((res) => {
      if (res.ok) {
        res.json().then((userData) => {
          setRestaurantBookmarkDetail(userData)
        });
      } else {
        res.json().then((err) => setErrors(err.errors))
      }
    }) 
    }
    
  return (
    <div>
        <p>{restaurant_name}</p>
        <ul>Your Notes</ul>
        <p>{personal_note?.personal_note}</p>
      <textarea
      value={personal_note?.personal_note}
      onChange={(e)=>{ setCreatePersonalNote(e.target.value) }}
       />
       <br ></br>
        {/* <Link to={`myBookmarks/${bookmark_id}`}> */}
        <button className= "create-btn" onClick={handleCreateNote} >Add Note</button>
      {/* </Link> */}
      <button className= "edit-btn"> Edit Note</button>
        <button onClick={handleDelete}>Delete Boomark</button>
    </div>
  )
}

export default BookmarkCard