import React from 'react';
import { useState } from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ onPhotoSelect, checkFavourite, updateToFavPhotoIds, photoData, topicData }) => {
  console.log()
  return (
    <div className="home-route">
      <TopNavigation checkFavourite={checkFavourite} topicData={topicData} />
      <PhotoList updateToFavPhotoIds={updateToFavPhotoIds} onPhotoSelect={onPhotoSelect} photoData={photoData} />
    </div>
  );
};

export default HomeRoute;
