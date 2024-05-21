import React from "react";
import App from "App";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (

    <>
  <img src={props.sampleDataForPhotoListItem.imageSource} alt='Photo'/>
  <img src={props.sampleDataForPhotoListItem.profile} alt='Photo'/>
  <div>{props.sampleDataForPhotoListItem.username}</div>
  <div>{props.sampleDataForPhotoListItem.location["city"]} {props.sampleDataForPhotoListItem.location["country"]}</div>
  
  {console.log('New data')}
  </>
  )
};

export default PhotoListItem;
