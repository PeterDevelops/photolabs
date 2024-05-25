import React from 'react';
import { useState } from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ openModal, isModalOpen, checkFavourite, favourite, addAndDeleteFavourite}) => {

  return (
    <div className="home-route">
      <TopNavigation checkFavourite={checkFavourite} favourite={favourite}/>
      <PhotoList addAndDeleteFavourite={addAndDeleteFavourite} openModal={openModal} isModalOpen={isModalOpen}/>
    </div>
  );
};

export default HomeRoute;
