import React from 'react';
import photos from '../mocks/photos';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({isModalOpen, closeModal, selectedPhoto}) => {
  if (!isModalOpen) {
    return null;
  }
  console.log(selectedPhoto);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
