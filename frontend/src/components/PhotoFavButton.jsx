import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ updateToFavPhotoIds, photoID }) {
  const [heart, setHeart] = useState(false);

  const likedHeart = () => {
    setHeart(prevHeart => prevHeart === false ? true : false);
    updateToFavPhotoIds(photoID);
  };

  return (
    <div className="photo-list__fav-icon" onClick={likedHeart}>

      <div className="photo-list__fav-icon-svg">
        {heart === false && <FavIcon selected={''} />}
        {heart === true && <FavIcon selected={true} />}
      </div>

    </div>
  );
}

export default PhotoFavButton;