import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';
import "../styles/PhotoListItem.scss";


const PhotoDetailsModal = ({ onClosePhotoDetailsModal, updateToFavPhotoIds, state, photoData }) => {
  if (!state.isModalOpen) {
    return null;
  }

  const similarPhotosValue = Object.values(state.selectedPhoto.similar_photos);
  return (
    <>
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={onClosePhotoDetailsModal}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
        <div className='photo-details-container'>

          {/** Large Image */}
          <div >
            <PhotoFavButton updateToFavPhotoIds={updateToFavPhotoIds} photoID={state.selectedPhoto.id} favouritePhoto={state.favourite || []} />
            <img className='photo-details-modal__image' src={state.selectedPhoto.urls.full} alt='selected photo' />
          </div>

          {/** Profile detail container */}

          <div className='photo-details-modal__photographer-details'>
            {/** Profile picture */}
            <img className='photo-details-modal__photographer-profile' src={state.selectedPhoto.user.profile} />

            <div className="photo-list__user-info">
              {/** Profile name */}
              <div>{state.selectedPhoto.user.name}</div>
              {/** Profile location*/}
              <div className="photo-list__user-location">{state.selectedPhoto.location.city}, {state.selectedPhoto.location.country}</div>
            </div>

          </div>

          <div className='photo-details-modal__header'>Similiar Photos</div>
        </div>

        {/** Map similar photos, use PhotoListItem? */}
        <div className='photo-details-modal__images'>

          <PhotoList photos={similarPhotosValue} updateToFavPhotoIds={updateToFavPhotoIds} photoData={photoData} favouritePhoto={state.favourite} />

        </div>
      </div>

    </>
  );
};

export default PhotoDetailsModal;
