import { GET_STORY_INFO } from "../actions/MarvelStory";

const initialState = {
  marvelStory: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STORY_INFO:
      return {
        ...state,
        marvelStory: action.marvelStory
      };
    default:
      return state;
  }
};
