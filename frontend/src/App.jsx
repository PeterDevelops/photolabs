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

// creates new array with 3 length worth of content, fill() 3 content with null, map content with photoListItem
// const photos = new Array(3).fill(null).map((element, index) => <PhotoListItem key={index} sampleDataForPhotoListItem={sampleDataForPhotoListItem}/>);

const App = () => {

  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    // onLoadTopic,
    onClosePhotoDetailsModal,
    checkFavourite,
  } = useApplicationData();

  return (
    <div className="App">
      
      <HomeRoute onPhotoSelect={onPhotoSelect} checkFavourite={checkFavourite} updateToFavPhotoIds={updateToFavPhotoIds} />
      <PhotoDetailsModal onClosePhotoDetailsModal={onClosePhotoDetailsModal} updateToFavPhotoIds={updateToFavPhotoIds} state={state} />
    </div>
  );
};

export default App;
