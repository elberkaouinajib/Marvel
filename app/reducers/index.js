import { combineReducers } from "redux";

import getChars from "./ListMarvelChars";
import marvelChar from "./MarvelChar";
import getComics from "./ListMarvelComics";
import marvelComic from "./MarvelComic";
import getSeries from "./ListMarvelSeries";
import marvelSerie from "./MarvelSerie";
export default combineReducers({
  getChars,
  marvelChar,
  getComics,
  marvelComic,
  getSeries,
  marvelSerie
});
