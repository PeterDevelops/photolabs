import React, { useState } from 'react';
import '../styles/PhotoDetailsModal.scss';

// create a function that will return a modal
const Modal = ({isModalOpen, closeModal}) => {
  if (!isModalOpen) {
    return null;
  }

  return (
    
  <div className='photo-details-modal'>
    
    <button className='photo-details-modal__close-button' onClick={closeModal}>
    <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_428_287)">
    <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_428_287">
    <rect width="18" height="18" fill="white"/>
    </clipPath>
  </defs>
</svg>

    </button>
    
  </div>
  
)
}

export default Modal;
