import React, { Fragment } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({sampleDataForPhotoListItem}) => {
  return (
    <>
    <div className="photo-list__item">
      <div>
    <PhotoFavButton />
    <img src={sampleDataForPhotoListItem.imageSource} alt='Photo item' className="photo-list__image"/>
    </div>
      <div className="photo-list__user-details">
        <img src={sampleDataForPhotoListItem.profile} alt='User image' className="photo-list__user-profile"/>

        <div className="photo-list__user-info">
        <div>{sampleDataForPhotoListItem.username}</div>
        <div className="photo-list__user-location">{sampleDataForPhotoListItem.location["city"]}, {sampleDataForPhotoListItem.location["country"]}</div>
        </div>

    </div>
    </div>
  </>
  )
};

export default PhotoListItem;
