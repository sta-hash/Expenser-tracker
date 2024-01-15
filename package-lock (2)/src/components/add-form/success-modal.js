import React, { useState } from 'react'
import "./success-modal.css";
import Modal from 'react-modal';
import { Link } from 'react-router-dom'

const SuccessModal = (modalOpen, setModalOpen) => {
  const [show, setShow] = useState(false)
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'pink',
      borderRadius: '12px',
    },
  }
  const handleClose = () =>{
    setModalOpen(false)
  }
  return (
    <Modal isOpen={modalOpen} style={customStyles} onHide={handleClose}>
      <div className='modal-inner'>
        <label>Expense Added Successfully</label>
        <img src={require('../../assets/images/added-image.png')} alt='Expense Added' className='added-image' />
        <Link to='/'>
          <div className="take-home-button">
            <i class="fi fi-rs-house-chimney"></i>
            Home
          </div>
        </Link>

      </div>
    </Modal>
  )
}

export default SuccessModal
