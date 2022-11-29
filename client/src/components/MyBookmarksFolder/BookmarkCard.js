import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const BookmarkCard = ({note_id, user_id, bookmark_id, restaurant_name, personal_note, setUpdateAfterDelete}) => {
  
  // console.log(personal_note?.personal_note)
  // const [createPersonalNote, setCreatePersonalNote] = useState("Tips, tricks, things to remember") 
  // const [restaurantBookmarkDetail, setRestaurantBookmarkDetail] = useState([]);
  // const [errors, setErrors] = useState([]);

  function handleDelete(){
        fetch(`/restaurants/${bookmark_id}`, {
            method: "DELETE",
        })
        .then(setUpdateAfterDelete)
    }

    // const handleCreateNote = (e) => {
    //   const formData = {
    //     personal_note: createPersonalNote,
    //     user_id: user_id,
    //     restaurant_id: bookmark_id
    //   }
    
    //   fetch(`/bookmarks`, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData)
    // })

    
    // .then((res) => {
    //   if (res.ok) {
    //     res.json().then((userData) => {
    //       setRestaurantBookmarkDetail(userData)

    //     });
    //   } else {
    //     res.json().then((err) => setErrors(err.errors))
    //   }
    // }) 
    // }
  const showAddButton = personal_note?.personal_note.length > 0 ? "hidden" : "" 
  const showEditButton = personal_note?.personal_note.length > 0 ? "" : "hidden" 
  console.log(showEditButton) 
  return (
    <div>
        <p>{restaurant_name}</p>
        {/* <button className= "create-btn" onClick={handleCreateNote} >Add Note</button> */}
        <p>{personal_note?.personal_note}</p>
      {/* <textarea
      value={personal_note?.personal_note}
      onChange={(e)=>{ setCreatePersonalNote(e.target.value) }}
       /> */}
       <br ></br>
        {/* <Link to={`myBookmarks/${bookmark_id}`}> */}
        <Link to={`addNote/${bookmark_id}`}>
          <button className= {showAddButton} >Add Note</button>
        </Link>
        {/* <button className= "create-btn" onClick={handleCreateNote} >Add Note</button> */}
      {/* </Link> */}
      <Link to={`myBookmarks/${note_id}`}>
        <button className= {showEditButton}> Edit Note</button>
      </Link>
        <button onClick={handleDelete}>Delete Boomark</button>
    </div>
  )
}

export default BookmarkCard