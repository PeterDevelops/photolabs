import React from 'react';
import PhotoFavButton from './components/PhotoFavButton';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// creates new array with 3 length worth of content, fill() 3 content with null, map content with photoListItem
const photos = new Array(3).fill(null).map((element, index) => <PhotoListItem key={index} sampleDataForPhotoListItem={sampleDataForPhotoListItem}/>);

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {photos}
    </div>
  );
};

export default App;
