import React from 'react';
import photos from '../mocks/photos';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoListItem from '../components/PhotoListItem';
import "../styles/PhotoListItem.scss";

const PhotoDetailsModal = ({ isModalOpen, closeModal, selectedPhoto, addAndDeleteFavourite}) => {
  if (!isModalOpen) {
    return null;
  }
  // selectedPhoto is the photo mock data from PhotoListItem which is triggered through the onClick event
  console.log('selectedPhoto:', selectedPhoto);

  const similarPhotosValue = Object.values(selectedPhoto.similar_photos);
  // const similarPhotos = similarPhotosValue.filter(photo => photo.id !== selectedPhoto.id);

  return (
    <>
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-container'>

      {/** Large Image */}
      <div>
      <PhotoFavButton addAndDeleteFavourite={addAndDeleteFavourite} photoID={selectedPhoto.id} />
        <img className='photo-details-modal__image' src={selectedPhoto.urls.full} alt='selected photo' />
      </div>
      

      {/** Profile detail container */}

      <div className='photo-details-modal__photographer-details'>
        {/** Profile picture */}
        <img className='photo-details-modal__photographer-profile' src={selectedPhoto.user.profile} />

        <div className="photo-list__user-info">
          {/** Profile name */}
          <div>{selectedPhoto.user.name}</div>
          {/** Profile location*/}
          <div className="photo-list__user-location">{selectedPhoto.location.city}, {selectedPhoto.location.country}</div>
        </div>

      </div>

      <div className='photo-details-modal__header'>Similiar Photos</div>
      </div>

      {/** Map similar photos, use PhotoListItem? */}
      <div className='photo-details-modal__images'>
        
          <PhotoList photos={similarPhotosValue} addAndDeleteFavourite={addAndDeleteFavourite}/>
        
      </div>
     </div>

    </>
  );
};

export default PhotoDetailsModal;
