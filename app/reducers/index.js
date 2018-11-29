import { combineReducers } from "redux";

import getChars from "./ListMarvelChars";
import marvelChar from "./MarvelChar";
import getComics from "./ListMarvelComics";
import marvelComic from "./MarvelComic";
import getSeries from "./ListMarvelSeries";
import marvelSerie from "./MarvelSerie";
import getStories from "./ListMarvelStories";
import marvelStory from "./MarvelStory";
export default combineReducers({
  getChars,
  marvelChar,
  getComics,
  marvelComic,
  getSeries,
  marvelSerie,
  getStories,
  marvelStory
});
