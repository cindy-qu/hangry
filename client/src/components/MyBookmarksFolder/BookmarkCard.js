import React from 'react'
import { Link } from 'react-router-dom'

const BookmarkCard = ({yelp_url, restaurant_image, note_id, user_id, bookmark_id, restaurant_name, personal_note, setUpdateAfterDelete}) => {
  

  function handleDelete(){
        fetch(`/restaurants/${bookmark_id}`, {
            method: "DELETE",
        })
        .then(setUpdateAfterDelete)
    }

  const showAddButton = personal_note?.personal_note.length > 0 ? "hidden" : "" 
  const showEditButton = personal_note?.personal_note.length > 0 ? "" : "hidden" 

  const linkAddEdit = personal_note?.personal_note.length > 0 ? `myBookmarks/${note_id}` : `addNote/${bookmark_id}`
const showAddEddit =  personal_note?.personal_note.length > 0 ? "Edit Note" : "Add Note" 

  return (

      <div className="col-sm-3">
        <div className="card">
        <img src={restaurant_image} className="card-img-top" alt={restaurant_name}/>
        <div className="card-header">
        <h5 className="card-title">{restaurant_name}</h5>
        </div>

          <ul className="list-group list-group-flush">
    <li className="list-group-item"> 
      <p className="card-text"> {personal_note?.personal_note}</p>
    </li>
    <li className="list-group-item"> 
    <a href={yelp_url} target="_blank" rel="noreferrer">
        <button className="btn btn-danger">Yelp Page</button>
      </a>

    <Link to={`/createEvent/${bookmark_id}`}>
        <button className="btn btn-primary" >Create Event</button>
    </Link>

    </li>
    <li className="list-group-item">
              
    <Link to={linkAddEdit}>
              <button className= "btn btn-success" >{showAddEddit}</button>
            </Link>
            <button className="btn btn-danger" onClick={handleDelete}>Delete Boomark</button>
    </li>

  </ul>
            {/* <h5 className="card-title">{restaurant_name}</h5> */}
            {/* <p className="card-text"> {personal_note?.personal_note}</p> */}
        
            {/* <Link to={linkAddEdit}>
              <button className= "btn btn-success" >{showAddEddit}</button>
            </Link> */}
{/* 
            <Link to={`myBookmarks/${note_id}`}>
              <button className= {showEditButton}> Edit Note</button>
            </Link> */}

            {/* <button className="btn btn-danger" onClick={handleDelete}>Delete Boomark</button> */}

    </div>
  </div>

  )
}

export default BookmarkCard