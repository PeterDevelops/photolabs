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


  // // setPhotoSelected
  // const [selectedPhoto, setSelectedPhoto] = useState(null);

  // // 
  // const [isModalOpen, setModal] = useState(false);

  // const [favourite, setFavourite] = useState([]);

  // // logic for adding favourite
  // const addAndDeleteFavourite = (photoID) => {
  //   setFavourite((prev) => {
  //     // creates a copy of the previous array
  //     const updatedPrev = [...prev];

  //     // if updatedPrev.includes(photoID)
  //     if (updatedPrev.includes(photoID)) {
  //       // if true: filter photoID and return the updatedPrev
  //       return updatedPrev.filter(id => id !== photoID);
  //     }

  //     // otherwise push photoID
  //     updatedPrev.push(photoID);
  //     //return prev array
  //     return updatedPrev;
  //   });
  // };

  // const checkFavourite = (state.favourite) => {
  //   return state.favourite.length >= 1;
  // };

  // // openModal is triggered through onClick event in PhotoListItem 
  // const openModal = (photo) => {
  //   setModal(true);
  //   // evertime openModal is triggered we grab the information of photo mock data
  //   setSelectedPhoto(photo);
  // };

  // const closeModal = () => {
  //   setModal(false);
  //   setSelectedPhoto(null);
  // };

  // console.log('favourited photo:', favourite);

  return (
    <div className="App">
      
      <HomeRoute onPhotoSelect={onPhotoSelect} checkFavourite={checkFavourite} updateToFavPhotoIds={updateToFavPhotoIds} />
      <PhotoDetailsModal onClosePhotoDetailsModal={onClosePhotoDetailsModal}
      updateToFavPhotoIds={updateToFavPhotoIds} state={state} />
    </div>
  );
};

export default App;
