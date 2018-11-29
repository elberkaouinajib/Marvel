import {
  GET_ALL_CHARS,
  GET_SERIE_ALL_CHARS,
  CLEAN_SERIE_CHARS,
  GET_COMIC_ALL_CHARS,
  CLEAN_COMIC_CHARS,
  GET_STORY_ALL_CHARS,
  CLEAN_STORY_CHARS
} from "../actions/ListMarvelChars";

const initialState = {
  marvelCharsList: [],
  marvelSerieCharsList: [],
  marvelComicCharsList: [],
  marvelStoryCharsList: [],
  offset: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CHARS:
      return {
        ...state,
        marvelCharsList: [
          ...state.marvelCharsList,
          ...action.marvelCharsList.list
        ],
        offset: action.marvelCharsList.offset
      };
    case GET_SERIE_ALL_CHARS:
      return {
        ...state,
        marvelSerieCharsList: [
          ...state.marvelSerieCharsList,
          ...action.marvelSerieCharsList.list
        ],
        offset: action.marvelSerieCharsList.offset
      };
    case CLEAN_SERIE_CHARS:
      return {
        ...state,
        marvelSerieCharsList: []
      };

    case GET_COMIC_ALL_CHARS:
      return {
        ...state,
        marvelComicCharsList: [
          ...state.marvelComicCharsList,
          ...action.marvelComicCharsList.list
        ],
        offset: action.marvelComicCharsList.offset
      };
    case CLEAN_COMIC_CHARS:
      return {
        ...state,
        marvelComicCharsList: []
      };
    case GET_STORY_ALL_CHARS:
      return {
        ...state,
        marvelStoryCharsList: [
          ...state.marvelStoryCharsList,
          ...action.marvelStoryCharsList.list
        ],
        offset: action.marvelStoryCharsList.offset
      };
    case CLEAN_STORY_CHARS:
      return {
        ...state,
        marvelStoryCharsList: []
      };
    default:
      return state;
  }
};
