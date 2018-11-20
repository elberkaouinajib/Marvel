import { combineReducers } from "redux";

import getChars from "./ListMarvelChars";
import marvelChar from "./MarvelChar";
import getCreats from "./ListMarvelCreats";
import marvelCreat from "./MarvelCreat";

export default combineReducers({
  getChars, marvelChar, getCreats, marvelCreat,
});
