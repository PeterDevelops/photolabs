import React, { Fragment } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const { photos, addAndDeleteFavourite} = props;

  return (
    <>
    <div className="photo-list__item">
      <div>
    <PhotoFavButton addAndDeleteFavourite={addAndDeleteFavourite} photoID={photos.id} />
    <img src={photos.urls.regular} alt='Photo item' className="photo-list__image"/>
    </div>
      <div className="photo-list__user-details">
        <img src={photos.user.profile} alt='User image' className="photo-list__user-profile"/>

        <div className="photo-list__user-info">
        <div>{photos.user.username}</div>
        <div className="photo-list__user-location">{photos.location.city}, {photos.location.country}</div>
        </div>

    </div>
    </div>
  </>
  )
};
 
export default PhotoListItem;
