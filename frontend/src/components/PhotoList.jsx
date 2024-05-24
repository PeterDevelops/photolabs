import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "../mocks/photos";

const PhotoList = ({addAndDeleteFavourite, openModal}) => {
  
  const photosMap = photos.map((data) => {
    return <PhotoListItem key={data.id} photos={data} addAndDeleteFavourite={addAndDeleteFavourite} openModal={openModal}/>;
  });
  
  return (

    <ul className="photo-list">
      {photosMap}
    </ul>

  );
};
 
export default PhotoList;
