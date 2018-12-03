import {
  GET_ALL_COMICS,
  GET_CHAR_ALL_COMICS,
  CLEAN_CHAR_COMICS,
  GET_SERIE_ALL_COMICS,
  CLEAN_SERIE_COMICS,
  GET_STORY_ALL_COMICS,
  CLEAN_STORY_COMICS
} from "../actions/ListMarvelComics";

const initialState = {
  marvelComicsList: [],
  marvelCharComicsList: [],
  marvelSerieComicsList: [],
  marvelStoryComicsList: [],
  offset: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COMICS:
      return {
        ...state,
        marvelComicsList: [
          ...state.marvelComicsList,
          ...action.marvelComicsList.list
        ],
        offset: action.marvelComicsList.offset
      };
    case GET_CHAR_ALL_COMICS:
      return {
        ...state,
        marvelCharComicsList: [
          ...state.marvelCharComicsList,
          ...action.marvelCharComicsList.list
        ],
        offset: action.marvelCharComicsList.offset
      };
    case CLEAN_CHAR_COMICS:
      return {
        ...state,
        marvelCharComicsList: []
      };

    case GET_STORY_ALL_COMICS:
      return {
        ...state,
        marvelStoryComicsList: [
          ...state.marvelStoryComicsList,
          ...action.marvelStoryComicsList.list
        ],
        offset: action.marvelStoryComicsList.offset
      };
    case CLEAN_STORY_COMICS:
      return {
        ...state,
        marvelStoryComicsList: []
      };
    case GET_SERIE_ALL_COMICS:
      return {
        ...state,
        marvelSerieComicsList: [
          ...state.marvelSerieComicsList,
          ...action.marvelSerieComicsList.list
        ],
        offset: action.marvelSerieComicsList.offset
      };
    case CLEAN_SERIE_COMICS:
      return {
        ...state,
        marvelSerieComicsList: []
      };
    default:
      return state;
  }
};
