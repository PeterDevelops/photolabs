import React, {useState} from 'react';
// import PhotoListItem from './components/PhotoListItem';
// import PhotoList from './components/PhotoList';
// import TopicListItem from './components/TopicListItem';
// import TopNavigation from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';
import './App.scss';
import './styles/PhotoDetailsModal.scss';

// creates new array with 3 length worth of content, fill() 3 content with null, map content with photoListItem
// const photos = new Array(3).fill(null).map((element, index) => <PhotoListItem key={index} sampleDataForPhotoListItem={sampleDataForPhotoListItem}/>);

const App = () => {
  const [isModalOpen, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  // create a function that will return a modal
  // Note: Rendering a single component to build components in isolation
  const Modal = () => {
    if (!isModalOpen) {
      return null;
    }
  
    return (
    <div className='photo-details-modal'>
      
      <button className='photo-details-modal__close-button' onClick={closeModal}>X</button>
      
    </div>
  )
  }

  console.log('Modal Triggered', isModalOpen);

  return (
    <div className="App">
      <HomeRoute Modal={Modal} openModal={openModal}/>
      <Modal />
    </div>
  );
};

export default App;
