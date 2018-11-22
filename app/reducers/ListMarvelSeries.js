import {
  GET_ALL_SERIES,
  GET_CHAR_ALL_SERIES
} from "../actions/ListMarvelSeries";

const initialState = {
  marvelSeriesList: [],
  marvelCharSeriesList: [],
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
    default:
      return state;
  }
};
