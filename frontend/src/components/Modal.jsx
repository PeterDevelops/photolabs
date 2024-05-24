import React, { useState } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

// create a function that will return a modal
const Modal = ({isModalOpen, closeModal}) => {
  if (!isModalOpen) {
    return null;
  }

  return (
    
  <div className='photo-details-modal'>
    
    <button className='photo-details-modal__close-button' onClick={closeModal}>
      <img src={closeSymbol} alt='close symbol'></img>
    </button>
    
  </div>
  
)
}

export default Modal;
