import { GET_ALL_CREATS } from "../actions/ListMarvelCreats";

const initialState = {
  marvelCreatsList: [],
  offset: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CREATS:
      return {
        ...state,
        marvelCreatsList: [...state.marvelCreatsList, ...action.marvelCreatsList.list],
        offset: action.marvelCreatsList.offset
      };
    default:
      return state;
  }
};
