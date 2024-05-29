import { useEffect, useReducer } from "react";

// action
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
};

// initial state
const initialValue = {
  favourite: [],
  selectedPhoto: null,
  isModalOpen: false,
  photoData: [],
  topicData: []
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
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload
      };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        photoData: action.payload
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  };
};

const useApplicationData = function() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const checkFavourite = () => {
    return state.favourite.length >= 1;
  };

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:8001/api/photos').then(res => res.json()),
      fetch('http://localhost:8001/api/topics').then(res => res.json())
    ])
      .then(([photoData, topicData]) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData });
      })
      .catch(err => {
        throw new Error('Could not fetch data');
      });
  }, []);

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
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  const fetchPhotosByTopicId = (topic_id) => {
    fetch(`http://localhost:8001/api/topics/photos/${topic_id}`)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data });
      })
      .catch(error => {
        throw new Error('Could not retrive topic data');
      });
  };

  return {
    state,
    updateToFavPhotoIds,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    checkFavourite,
    fetchPhotosByTopicId
  };
};

export default useApplicationData;