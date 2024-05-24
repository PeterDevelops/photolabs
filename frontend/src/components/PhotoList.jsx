import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "../mocks/photos";

const PhotoList = () => {

  const photosMap = photos.map((data) => <PhotoListItem key={data.id} photos={data}/>);
  
  return (

    <ul className="photo-list">
      {photosMap}
    </ul>

  );
};
 
export default PhotoList;
