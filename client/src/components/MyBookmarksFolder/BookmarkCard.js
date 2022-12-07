import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalComponent from '../ModalComponent'

const BookmarkCard = ({yelp_url, restaurant_image, note_id, user_id, bookmark_id, restaurant_name, personal_note, setUpdateAfterDelete}) => {
  const [modalOpen, setModalOpen] = useState(false); 

  function handleDelete(){                                              
console.log(bookmark_id)
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
          <div className="card-header">
            <h5 className="card-title">{restaurant_name}</h5>

            <button
        className="btn-close" aria-label="Close"
        id="bookmark-close"
        data-bs-toggle="modal"
        data-bs-target="#deleteModal"
        onClick={() => {
          setModalOpen(true);
        }}
      >
 
      </button>
          </div>
          {modalOpen && <ModalComponent setOpenModal={setModalOpen} handleDelete={handleDelete} />}
      


          {/* <button id="bookmark-close" type="button" className="btn-close" aria-label="Close" data-bs-toggle="modal" data-bs-target="#closeModal"></button> */}

          {/* <div className="modal fade" id="closeModal" aria-labelledby="closeModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel" >Confirm Delete</h1>

                </div>
              <div className="modal-body">
                {restaurant_name}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button  type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div> */}


        <img src={restaurant_image} className="card-img-top" alt={restaurant_name}/>

          <ul className="list-group list-group-flush">
            <li className="list-group-item"> 
              <p className="card-text"> {personal_note?.personal_note}</p>
            </li>
            <li className="list-group-item" id="hover-option"> 
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
                  {/* <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete Boomark</button> */}
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