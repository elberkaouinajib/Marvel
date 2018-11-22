import { GET_COMIC_INFO } from "../actions/MarvelComic";

const initialState = {
  marvelComic: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COMIC_INFO:
      return {
        ...state,
        marvelComic: action.marvelComic
      };
    default:
      return state;
  }
};
