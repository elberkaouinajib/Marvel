import {
  GET_ALL_CHARS,
  GET_SERIE_ALL_CHARS,
  CLEAN_SERIE_CHARS
} from "../actions/ListMarvelChars";

const initialState = {
  marvelCharsList: [],
  marvelSerieCharsList: [],
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
    default:
      return state;
  }
};
