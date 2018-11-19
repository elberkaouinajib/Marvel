import { combineReducers } from "redux";

import getChars from "./ListMarvelChars";
import marvelChar from "./MarvelChar";

export default combineReducers({
  getChars,marvelChar
});
