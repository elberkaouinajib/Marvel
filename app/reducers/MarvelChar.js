import { GET_CHAR_INFO } from "../actions/MarvelChar";

const initialState = {
  marvelChar: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHAR_INFO:
      return {
        ...state,
        marvelChar: action.marvelChar
      };
    default:
      return state;
  }
};
