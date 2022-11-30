import React, { useState, useEffect } from 'react'
import { Link, useParams} from 'react-router-dom'

const EditBookmarkCard = ( {user, setUpdateBookmarkCard} ) => {
    const [updated, setUpdated] = useState(false);
    const [errors, setErrors] = useState([]);

    const [personalNote, setPersonalNote] = useState("")
    const paramsObj = useParams()
    const paramsId = parseInt(paramsObj.id)

    // const bookmarkId = user.restaurants
    // let matchPersonalNote = bookmarkId.find(book => book.id === paramsId ? book.id : '')

    // useEffect(() => {
    //     setPersonalNote(matchPersonalNote.personal_note)
    // },[paramsId])

function handleUpdate(e) {
    e.preventDefault()
    fetch(`/bookmarks/${paramsId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            personal_note: personalNote
        }),
    }).then((res) => {
        if (res.ok) {
            res.json().then((updateB) => {
                setUpdateBookmarkCard(updateB)
                setUpdated(updated => !updated)
                // setPersonalNote("")
            });
        } else {
            res.json().then((err) => {
                setErrors(err.errors)
            })
        }
    })
}

const editMsgClassName = updated ? '' : 'hidden';
const formErrorMsg = errors.map((err) => (
    <p key={err}>{err}</p>
    ))

  return (
    <div>
        <h1>Edit Note</h1>
        <form onSubmit={handleUpdate}>
            <textarea
            value={personalNote}
            onChange={(e)=>{ setPersonalNote(e.target.value)}} />
            <button type="submit">Update Note</button>
        </form>
        <ul>{formErrorMsg}</ul>
        <div id="edit-complete-msg" className={editMsgClassName}>
                <h3>Edit complete!</h3>
                <Link to="/myBookmarks">
                  <button className='submit-btn'>View My Bookmarks
                  </button>
                </Link>
        </div>
    </div>
  )
}

export default EditBookmarkCard