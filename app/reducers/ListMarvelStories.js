import {
  GET_ALL_STORIES,
  GET_CHAR_ALL_STORIES,
  CLEAN_CHAR_STORIES,
  GET_COMIC_ALL_STORIES,
  CLEAN_COMIC_STORIES,
  GET_SERIE_ALL_STORIES,
  CLEAN_SERIE_STORIES
} from "../actions/ListMarvelStories";

const initialState = {
  marvelStoriesList: [],
  marvelCharStoriesList: [],
  marvelComicStoriesList: [],
  marvelSerieStoriesList: [],
  offset: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STORIES:
      return {
        ...state,
        marvelStoriesList: [
          ...state.marvelStoriesList,
          ...action.marvelStoriesList.list
        ],
        offset: action.marvelStoriesList.offset
      };
    case GET_CHAR_ALL_STORIES:
      return {
        ...state,
        marvelCharStoriesList: [
          ...state.marvelCharStoriesList,
          ...action.marvelCharStoriesList.list
        ],
        offset: action.marvelCharStoriesList.offset
      };
    case CLEAN_CHAR_STORIES:
      return {
        ...state,
        marvelCharStoriesList: []
      };
    case GET_COMIC_ALL_STORIES:
      return {
        ...state,
        marvelComicStoriesList: [
          ...state.marvelComicStoriesList,
          ...action.marvelComicStoriesList.list
        ],
        offset: action.marvelComicStoriesList.offset
      };
    case CLEAN_COMIC_STORIES:
      return {
        ...state,
        marvelComicStoriesList: []
      };
    case GET_SERIE_ALL_STORIES:
      return {
        ...state,
        marvelSerieStoriesList: [
          ...state.marvelSerieStoriesList,
          ...action.marvelSerieStoriesList.list
        ],
        offset: action.marvelSerieStoriesList.offset
      };
    case CLEAN_SERIE_STORIES:
      return {
        ...state,
        marvelSerieStoriesList: []
      };
    default:
      return state;
  }
};
