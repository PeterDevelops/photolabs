import React, { Fragment } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const { sampleDataForPhotoList } = props;

  return (
    <>
    <div className="photo-list__item">
      <div>
    <PhotoFavButton />
    <img src={sampleDataForPhotoList.urls.regular} alt='Photo item' className="photo-list__image"/>
    </div>
      <div className="photo-list__user-details">
        <img src={sampleDataForPhotoList.user.profile} alt='User image' className="photo-list__user-profile"/>

        <div className="photo-list__user-info">
        <div>{sampleDataForPhotoList.user.username}</div>
        <div className="photo-list__user-location">{sampleDataForPhotoList.location.city}, {sampleDataForPhotoList.location.country}</div>
        </div>

    </div>
    </div>
  </>
  )
};
 
export default PhotoListItem;
