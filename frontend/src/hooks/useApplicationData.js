import { useState } from "react";


const useApplicationData = function() {
  // state will contain the entire state of the application
  const [state, setState] = useState({
    favourite: [],
    selectedPhoto: null,
    isModalOpen: false
  });
  console.log('State:', state)
  // Add or remove a photo from the favourites list
  const updateToFavPhotoIds = (photoID) => {
    setState((prevState) => {
      const isFavourite = prevState.favourite.includes(photoID);
      const favourite = isFavourite
        ? prevState.favourite.filter((id) => id !== photoID)
        : [...prevState.favourite, photoID];
      return { ...prevState, favourite };
    });
  };

  // open modal
  const onPhotoSelect = (photo) => {
    setState((prevState) => ({
      ...prevState,
      selectedPhoto: photo,
      isModalOpen: true
    }));
  };

  const onClosePhotoDetailsModal = (photo) => {
    setState((prevState) => ({
      ...prevState,
      selectedPhoto: null,
      isModalOpen: false
    }));
  };

  const checkFavourite = () => {
    return state.favourite.length >= 1;
  };

  return {
    state,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    checkFavourite,
  };
};

export default useApplicationData;