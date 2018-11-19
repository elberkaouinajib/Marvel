import { GET_ALL_CHARS } from "../actions/ListMarvelChars";

const initialState = {
  marvelCharsList: [],
  offset: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CHARS:
      return {
        ...state,
        marvelCharsList: [...state.marvelCharsList, ...action.marvelCharsList.list],
        offset: action.marvelCharsList.offset
      };
    default:
      return state;
  }
};
