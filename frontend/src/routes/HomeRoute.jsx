import React from 'react';
import { useState } from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ onPhotoSelect, checkFavourite, updateToFavPhotoIds }) => {

  return (
    <div className="home-route">
      <TopNavigation checkFavourite={checkFavourite}  />
      <PhotoList updateToFavPhotoIds={updateToFavPhotoIds} onPhotoSelect={onPhotoSelect} />
    </div>
  );
};

export default HomeRoute;
