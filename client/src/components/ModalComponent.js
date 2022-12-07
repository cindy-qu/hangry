import React from 'react'

const ModalComponent = ({ setOpenModal, handleDelete }) => {
  return (


    <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="deleteModalLabel">Confirm Delete</h1>
            
          </div>
          <div className="modal-body">
            Are you sure you want to delete this bookmark?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={handleDelete} data-bs-dismiss="modal">Delete</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ModalComponent