import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({checkFavourite, favourite}) => {
  const checkFavourited = checkFavourite(favourite);
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge isFavPhotoExist={checkFavourited}/>
      {/* <FavIcon /> */}
    </div>
  )
}

export default TopNavigation;