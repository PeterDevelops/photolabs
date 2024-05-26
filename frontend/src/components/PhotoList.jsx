import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "../mocks/photos";
import PhotoDetailsModal from "../routes/PhotoDetailsModal";

const PhotoList = ({ updateToFavPhotoIds, onPhotoSelect }) => {

  const photosMap = photos.map((data) => {
    return <PhotoListItem key={data.id} photos={data} updateToFavPhotoIds={updateToFavPhotoIds} onPhotoSelect={onPhotoSelect} />;
  });

  return (

    <ul className="photo-list">
      {photosMap}
      {/* {selectedPhoto && <PhotoDetailsModal />} */}
    </ul>

  );
};

export default PhotoList;
