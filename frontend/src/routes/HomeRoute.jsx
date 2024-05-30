import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ onPhotoSelect, checkFavourite, updateToFavPhotoIds, photoData, topicData, fetchPhotosByTopicId, filterPhotosByUserInput, state }) => {

  return (
    <div className="home-route">
      <TopNavigation
      checkFavourite={checkFavourite}
      topicData={topicData}
      fetchPhotosByTopicId={fetchPhotosByTopicId}
      filterPhotosByUserInput={filterPhotosByUserInput}
      state={state}
      />

      <PhotoList
      updateToFavPhotoIds={updateToFavPhotoIds}
      onPhotoSelect={onPhotoSelect}
      photoData={photoData}
      />
    </div>
  );
};

export default HomeRoute;
