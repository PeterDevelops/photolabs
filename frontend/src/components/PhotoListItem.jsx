import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photos, updateToFavPhotoIds, onPhotoSelect }) => {
  if (!photos && !photos.urls && !photos.user) {
    return null;
  }

  return (

    <div className="photo-list__item">

      <div>
        <div>
          <PhotoFavButton updateToFavPhotoIds={updateToFavPhotoIds} photoID={photos.id} />
        </div>
        <img src={photos.urls.regular} alt='Photo item' className="photo-list__image" onClick={() => onPhotoSelect(photos)} />

      </div>
      <div className="photo-list__user-details">
        <img src={photos.user.profile} alt='User image' className="photo-list__user-profile" />

        <div className="photo-list__user-info">
          <div>{photos.user.username}</div>
          <div className="photo-list__user-location">{photos.location.city}, {photos.location.country}</div>
        </div>

      </div>
    </div>

  );
};

export default PhotoListItem;
