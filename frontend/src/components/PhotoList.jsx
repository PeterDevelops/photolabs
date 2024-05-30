import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ updateToFavPhotoIds, onPhotoSelect, photoData }) => {

  const photosMap = photoData.map((data) => {
    return <PhotoListItem key={data.id} photos={data} updateToFavPhotoIds={updateToFavPhotoIds} onPhotoSelect={onPhotoSelect} />;
  });

  console.log('PhotoList-photoData:', photoData);

  return (

    <ul className="photo-list">
      {photosMap}
    </ul>

  );
};

export default PhotoList;
