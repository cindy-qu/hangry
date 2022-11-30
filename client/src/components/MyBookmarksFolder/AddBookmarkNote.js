import React, { useState } from 'react'
import { Link, useParams} from 'react-router-dom'

const AddBookmarkNote = ({ user, setUpdateBookmarkNote }) => {
    const [createPersonalNote, setCreatePersonalNote] = useState("Tips, tricks, things to remember") 
    // const [restaurantBookmarkDetail, setRestaurantBookmarkDetail] = useState([]);
    const [errors, setErrors] = useState([]);
    const [updated, setUpdated] = useState(false);
    const paramsObj = useParams()
    const paramsId = parseInt(paramsObj.id)

    const handleCreateNote = (e) => {
        const formData = {
          personal_note: createPersonalNote,
          user_id: user.id,
          restaurant_id: paramsId
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
            setUpdateBookmarkNote(userData)
            setUpdated(updated => !updated)
          });
        } else {
          res.json().then((err) => setErrors(err.errors))
        }
      }) 
      }

      const editMsgClassName = updated ? '' : 'hidden';
      const formErrorMsg = errors.map((err) => (
        <p key={err}>{err}</p>
        ))


  return (
    <div>

    
      <textarea
      value={createPersonalNote}
      onChange={(e)=>{ setCreatePersonalNote(e.target.value) }}
       />
       <br></br>
    <button className= "create-btn" onClick={handleCreateNote} >Add Note</button>
    <ul>{formErrorMsg}</ul>
    <div id="edit-complete-msg" className={editMsgClassName}>
                <h3>Note Added!</h3>
                <Link to="/myBookmarks">
                  <button className='submit-btn'>View My Bookmarks
                  </button>
                </Link>
        </div>
    </div>
  )
}

export default AddBookmarkNote