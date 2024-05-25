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

  const openModal = (photo) => {
    setModal(true);
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setModal(false);
    setSelectedPhoto(null);
  };



  return (
    <div className="App">
      <HomeRoute openModal={openModal}/>
      <PhotoDetailsModal isModalOpen={isModalOpen} closeModal={closeModal} selectedPhoto={selectedPhoto}/>
    </div>
  );
};

export default App;
