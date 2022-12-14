import React from 'react'
import { Link } from 'react-router-dom'


const BookmarkCard = ({yelp_url, restaurant_image, note_id, user_id, bookmark_id, restaurant_name, personal_note, setUpdateAfterDelete}) => {
 

  function handleDelete(){                                              

        fetch(`/restaurants/${bookmark_id}`, {
            method: "DELETE",
        })
        .then(setUpdateAfterDelete)
    }

  // const showAddButton = personal_note?.personal_note.length > 0 ? "hidden" : "" 
  // const showEditButton = personal_note?.personal_note.length > 0 ? "" : "hidden" 
const apostId = restaurant_name.split(" ").join("")

  const idhover = apostId.replace("'","A");
const newidhover = `#${idhover}`

  const linkAddEdit = personal_note?.personal_note.length > 0 ? `myBookmarks/${note_id}` : `addNote/${bookmark_id}`
const showAddEddit =  personal_note?.personal_note.length > 0 ? "Edit Note" : "Add Note" 
// const showIcon =  personal_note?.personal_note.length > 0 ? "/images/pencil.png" : "/images/add.png" 
const fontAwesome = personal_note?.personal_note.length > 0 ? "fa-regular fa-pen-to-square" : "fa-regular fa-note-sticky"

  return (

      <div className="col-sm-3">

        <div className="card">
          <div className="card-header">
            <h5 className="card-title">{restaurant_name}</h5>

          </div>
          <button id="bookmark-close" type="button" className="btn-close" aria-label="Close" data-bs-toggle="modal" data-bs-target={newidhover}></button>
          <div className="modal fade" id={idhover} aria-labelledby="closeModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel" >Confirm Delete</h1>
                </div>
              <div className="modal-body" >
                Are you sure you want to delete your bookmark for <span style={{ fontWeight: 'bold' }}>{restaurant_name}</span>?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button  type="button" className="btn btn-danger" onClick={handleDelete} data-bs-dismiss="modal">Delete</button>
              </div>
            </div>
          </div>
        </div>

        <img src={restaurant_image} className="card-img-top" alt={restaurant_name}/>

          <ul className="list-group list-group-flush">
            <li className="list-group-item"> 
              <p className="card-text"> {personal_note?.personal_note}</p>
              <Link to={linkAddEdit}>
                <button id="close-CSS" >{showAddEddit}
                {/* <img src={showIcon} alt={showIcon} ></img> */}
                <i className= {fontAwesome}></i>
                </button>
            </Link>
            </li>
            <li className="list-group-item" id="hover-option"> 
              <a href={yelp_url} target="_blank" rel="noreferrer">
             <button className="btn btn-primary" id="yelp-CSS"><img src="/images/yelp.png" alt="/images/yelp.png"></img>Yelp Page </button>
             
             </a>

              <Link to={`/createEvent/${bookmark_id}`}>
                  <button className="btn btn-primary" id="google-CSS"><img src="/images/google-calendar.png" alt="/images/google-calendar.png"></img>Create Event</button>
              </Link>

            </li>

          {/* <li className="list-group-item">
                    
            /* <Link to={linkAddEdit}>
                <button className= "btn btn-success" >{showAddEddit}</button>
            </Link> 
                  <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete Boomark</button>
          </li> */}

          </ul>


    </div>
  </div>

  )
}

export default BookmarkCard