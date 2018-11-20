import { GET_CREAT_INFO } from "../actions/MarvelCreat";

const initialState = {
  marvelCreat: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CREAT_INFO:
      return {
        ...state,
        marvelCreat: action.marvelCreat
      };
    default:
      return state;
  }
};
