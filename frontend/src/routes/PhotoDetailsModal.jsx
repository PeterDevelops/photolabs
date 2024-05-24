import React from 'react';
import photos from '../mocks/photos';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({isModalOpen, closeModal}) => {
  if (!isModalOpen) {
    return null;
  }

  const modalMap = photos.map(data => {
    return data;
  })

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
      <div>
      {console.log(modalMap)}
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
