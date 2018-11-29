import {
  GET_ALL_SERIES,
  GET_CHAR_ALL_SERIES,
  CLEAN_CHAR_SERIES,
  GET_COMIC_ALL_SERIES,
  CLEAN_COMIC_SERIES,
  GET_STORY_ALL_SERIES,
  CLEAN_STORY_SERIES
} from "../actions/ListMarvelSeries";

const initialState = {
  marvelSeriesList: [],
  marvelCharSeriesList: [],
  marvelComicSeriesList: [],
  marvelStorySeriesList: [],
  offset: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SERIES:
      return {
        ...state,
        marvelSeriesList: [
          ...state.marvelSeriesList,
          ...action.marvelSeriesList.list
        ],
        offset: action.marvelSeriesList.offset
      };
    case GET_CHAR_ALL_SERIES:
      return {
        ...state,
        marvelCharSeriesList: [
          ...state.marvelCharSeriesList,
          ...action.marvelCharSeriesList.list
        ],
        offset: action.marvelCharSeriesList.offset
      };
    case CLEAN_CHAR_SERIES:
      return {
        ...state,
        marvelCharSeriesList: []
      };
    case GET_COMIC_ALL_SERIES:
      return {
        ...state,
        marvelComicSeriesList: [
          ...state.marvelComicSeriesList,
          ...action.marvelComicSeriesList.list
        ],
        offset: action.marvelComicSeriesList.offset
      };
    case CLEAN_COMIC_SERIES:
      return {
        ...state,
        marvelComicSeriesList: []
      };
    case GET_STORY_ALL_SERIES:
      return {
        ...state,
        marvelStorySeriesList: [
          ...state.marvelStorySeriesList,
          ...action.marvelStorySeriesList.list
        ],
        offset: action.marvelStorySeriesList.offset
      };
    case CLEAN_STORY_SERIES:
      return {
        ...state,
        marvelStorySeriesList: []
      };
    default:
      return state;
  }
};
