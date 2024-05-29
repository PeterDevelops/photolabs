import React, { useState } from 'react';
// import PhotoListItem from './components/PhotoListItem';
// import PhotoList from './components/PhotoList';
// import TopicListItem from './components/TopicListItem';
// import TopNavigation from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';
// import Modal from './components/Modal';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import useApplicationData from './hooks/useApplicationData';
import TopicList from 'components/TopicList';

const App = () => {

  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    checkFavourite,
    fetchPhotosByTopicId
  } = useApplicationData();
  
  return (
    <div className="App">
      <HomeRoute onPhotoSelect={onPhotoSelect} checkFavourite={checkFavourite} updateToFavPhotoIds={updateToFavPhotoIds} photoData={state.photoData} topicData={state.topicData} fetchPhotosByTopicId={fetchPhotosByTopicId} />
      <PhotoDetailsModal onClosePhotoDetailsModal={onClosePhotoDetailsModal} updateToFavPhotoIds={updateToFavPhotoIds} state={state} photoData={state.photoData} />
    </div>
  );
};

export default App;
