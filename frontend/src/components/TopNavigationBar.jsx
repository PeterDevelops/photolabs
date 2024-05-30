import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigation = ({ checkFavourite, topicData, fetchPhotosByTopicId, filterPhotosByUserInput, state }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
      topicData={topicData}
      fetchPhotosByTopicId={fetchPhotosByTopicId}
      filterPhotosByUserInput={filterPhotosByUserInput}
      state={state}
      />

      <FavBadge isFavPhotoExist={checkFavourite()} />
    </div>
  );
};

export default TopNavigation;