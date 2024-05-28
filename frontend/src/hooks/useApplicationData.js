import { useState, useReducer } from "react";

//   /* insert app levels actions below */
// action
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

// initial state
const initialState = {
  favourite: [],
  selectedPhoto: null,
  isModalOpen: false
};

// reducer function
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favourite: [...state.favourite, action.payload]
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favourite: state.favourite.filter(id => id !== action.payload)
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload,
        isModalOpen: true
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        selectedPhoto: null,
        isModalOpen: false
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
    };
  };



const useApplicationData = function() {
  // // state will contain the entire state of the application
  // const [state, setState] = useState({
  //   favourite: [],
  //   selectedPhoto: null,
  //   isModalOpen: false
  // });  

  // console.log('State:', state);

  // // Add or remove a photo from the favourites list
  // const updateToFavPhotoIds = (photoID) => {
  //   setState((prevState) => {
  //     const isFavourite = prevState.favourite.includes(photoID);
  //     const favourite = isFavourite
  //       ? prevState.favourite.filter((id) => id !== photoID)
  //       : [...prevState.favourite, photoID];
  //     return { ...prevState, favourite };  
  //   });  
  // };  

  // // open modal
  // const onPhotoSelect = (photo) => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     selectedPhoto: photo,
  //     isModalOpen: true
  //   }));  
  // };  

  // const onClosePhotoDetailsModal = (photo) => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     selectedPhoto: null,
  //     isModalOpen: false
  //   }));  
  // };  

  const [state, dispatch] = useReducer(reducer, initialState);

  const checkFavourite = () => {
    return state.favourite.length >= 1;
  };  

  console.log('State:', state);

  const updateToFavPhotoIds = (photoID) => {
    const isFavourite = state.favourite.includes(photoID);
    if (isFavourite) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoID });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoID });
    };
  };

  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS })
  }

    return {
      state,
      updateToFavPhotoIds,
      onPhotoSelect,
      onClosePhotoDetailsModal,
      checkFavourite,
    };
  };
  // useReducer function state



export default useApplicationData;