import React, {useState} from 'react';
// import PhotoListItem from './components/PhotoListItem';
// import PhotoList from './components/PhotoList';
// import TopicListItem from './components/TopicListItem';
// import TopNavigation from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';
// import Modal from './components/Modal';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';


// creates new array with 3 length worth of content, fill() 3 content with null, map content with photoListItem
// const photos = new Array(3).fill(null).map((element, index) => <PhotoListItem key={index} sampleDataForPhotoListItem={sampleDataForPhotoListItem}/>);

const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  
  const [isModalOpen, setModal] = useState(false);

  // openModal is triggered through onClick event in PhotoListItem 
  const openModal = (photo) => {
    setModal(true);
    // evertime openModal is triggered we grab the information of photo mock data
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setModal(false);
    setSelectedPhoto(null);
  };


  return (
    <div className="App">
      <HomeRoute openModal={openModal} isModalOpen={isModalOpen} selectedPhoto={selectedPhoto}/>
      <PhotoDetailsModal isModalOpen={isModalOpen} closeModal={closeModal} selectedPhoto={selectedPhoto}/>
    </div>
  );
};

export default App;
