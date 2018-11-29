import { GET_SERIE_INFO } from "../actions/MarvelSerie";

const initialState = {
  marvelSerie: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SERIE_INFO:
      return {
        ...state,
        marvelSerie: action.marvelSerie
      };
    default:
      return state;
  }
};
