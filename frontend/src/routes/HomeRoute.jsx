import React from 'react';
import { useState } from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {

  const [favourite, setFavourite] = useState([]);

  // logic for adding favourite
  const addAndDeleteFavourite = (photoID) => {
    setFavourite((prev) =>{ 
      // creates a copy of the previous array
      const updatedPrev = [...prev];

      // if updatedPrev.includes(photoID)
      if (updatedPrev.includes(photoID)) {
        // if true: filter photoID
        setFavourite(updatedPrev.filter(id => id !== photoID ));
      }
      
      // otherwise push photoID
  
      updatedPrev.push(photoID);
      //return prev array
      return updatedPrev;
    });
  };
  // create onClick handler, with hard coded 
  console.log('This is favourite: ', favourite);
  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList addAndDeleteFavourite={addAndDeleteFavourite} />
    </div>
  );
};

export default HomeRoute;
