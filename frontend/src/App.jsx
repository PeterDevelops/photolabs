import React from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import useApplicationData from './hooks/useApplicationData';

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
      <HomeRoute
        onPhotoSelect={onPhotoSelect}
        checkFavourite={checkFavourite}
        updateToFavPhotoIds={updateToFavPhotoIds}
        photoData={state.photoData}
        topicData={state.topicData}
        state={state}
        fetchPhotosByTopicId={fetchPhotosByTopicId}
      />

      <PhotoDetailsModal
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        updateToFavPhotoIds={updateToFavPhotoIds}
        state={state}
        photoData={state.photoData}
      />
    </div>
  );
};

export default App;
