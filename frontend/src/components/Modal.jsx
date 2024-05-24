import React, { useState } from 'react';
import '../styles/PhotoDetailsModal.scss';

// create a function that will return a modal
const Modal = ({isModalOpen, closeModal}) => {
  if (!isModalOpen) {
    return null;
  }

  return (
    
  <div className='photo-details-modal'>
    
    <button className='photo-details-modal__close-button' onClick={closeModal}>X</button>
    
  </div>
  
)
}

export default Modal;
