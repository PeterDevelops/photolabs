import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({sampleDataForPhotoListItem}) => {
  return (

    <>
  <img src={sampleDataForPhotoListItem.imageSource} alt='Photo'/>
  <img src={sampleDataForPhotoListItem.profile} alt='Photo'/>
  <div>{sampleDataForPhotoListItem.username}</div>
  <div>{sampleDataForPhotoListItem.location["city"]} {sampleDataForPhotoListItem.location["country"]}</div>
  </>
  )
};

export default PhotoListItem;
