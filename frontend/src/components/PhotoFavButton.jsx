import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [heart, setHeart] = useState('inactive');

  const likedHeart = () => {
    setHeart(prevHeart => prevHeart === 'inactive' ? 'active' : 'inactive');
    console.log('Heart liked');
  };

  return (
    <div className="photo-list__fav-icon" onClick={likedHeart}>

      <div className="photo-list__fav-icon-svg">
        {heart === 'inactive' && <FavIcon selected={''}/>}
        {heart === 'active' && <FavIcon selected={'true'}/>}
      </div>

    </div>
  );
}

export default PhotoFavButton;