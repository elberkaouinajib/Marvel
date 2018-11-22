import { GET_ALL_COMICS } from "../actions/ListMarvelComics";

const initialState = {
  marvelComicsList: [],
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
    default:
      return state;
  }
};
