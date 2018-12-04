export const GET_ALL_STORIES = "GET_ALL_STORIES";

import md5 from "md5";
import axios from "axios";

//All Stories
export const getStories = (offset = 0) => dispatch => {
  const publicKey = "809d2a2ba2e23dde5009c0c6e18bbeb3";
  const privateKey = "90844a9f70b1e8eedb0bdfcb597a1524b9a62822";
  const TimeStamp = new Date().getMilliseconds();
  const hash = md5(`${TimeStamp}${privateKey}${publicKey}`);
  const generatedUrl = "https://gateway.marvel.com//v1/public/stories";
  axios({
    method: "GET",
    url: generatedUrl,
    params: {
      ts: TimeStamp,
      apikey: publicKey,
      hash: hash,
      offset: offset
    },
    Headers: {
      Accept: "*/*"
    }
  })
    .then(res => {
      console.log("redux", res);
      dispatch(
        getAllStories({
          list: res.data.data.results,
          offset: res.data.data.offset
        })
      );
    })
    .catch(err => console.log(err));
};

export const getAllStories = marvelStoriesList => ({
  type: GET_ALL_STORIES,
  marvelStoriesList
});

//Char Stories
export const GET_CHAR_ALL_STORIES = "GET_CHAR_ALL_STORIES";
export const CLEAN_CHAR_STORIES = "CLEAN_CHAR_STORIES";

export const getCharStories = (offset = 0, charId) => dispatch => {
  const publicKey = "809d2a2ba2e23dde5009c0c6e18bbeb3";
  const privateKey = "90844a9f70b1e8eedb0bdfcb597a1524b9a62822";
  const TimeStamp = new Date().getMilliseconds();
  const hash = md5(`${TimeStamp}${privateKey}${publicKey}`);
  const generatedUrl = `https://gateway.marvel.com//v1/public/characters/${charId}/stories`;
  axios({
    method: "GET",
    url: generatedUrl,
    params: {
      ts: TimeStamp,
      apikey: publicKey,
      hash: hash,
      offset: offset
    },
    Headers: {
      Accept: "*/*"
    }
  })
    .then(res => {
      dispatch(
        getAllCharStories({
          list: res.data.data.results,
          offset: res.data.data.offset
        })
      );
    })
    .catch(err => console.log(err));
};

export const getAllCharStories = marvelCharStoriesList => ({
  type: GET_CHAR_ALL_STORIES,
  marvelCharStoriesList
});

export const cleanCharStories = () => ({
  type: CLEAN_CHAR_STORIES
});

//Comic Stories
export const GET_COMIC_ALL_STORIES = "GET_COMIC_ALL_STORIES";
export const CLEAN_COMIC_STORIES = "CLEAN_COMIC_STORIES";

export const getComicStories = (offset = 0, comicId) => dispatch => {
  const publicKey = "809d2a2ba2e23dde5009c0c6e18bbeb3";
  const privateKey = "90844a9f70b1e8eedb0bdfcb597a1524b9a62822";
  const TimeStamp = new Date().getMilliseconds();
  const hash = md5(`${TimeStamp}${privateKey}${publicKey}`);
  const generatedUrl = `https://gateway.marvel.com//v1/public/comics/${comicId}/stories`;
  axios({
    method: "GET",
    url: generatedUrl,
    params: {
      ts: TimeStamp,
      apikey: publicKey,
      hash: hash,
      offset: offset
    },
    Headers: {
      Accept: "*/*"
    }
  })
    .then(res => {
      console.log("redux", res);
      dispatch(
        getAllComicStories({
          list: res.data.data.results,
          offset: res.data.data.offset
        })
      );
    })
    .catch(err => console.log(err));
};

export const getAllComicStories = marvelComicStoriesList => ({
  type: GET_COMIC_ALL_STORIES,
  marvelComicStoriesList
});

export const cleanComicStories = () => ({
  type: CLEAN_COMIC_STORIES
});

//Serie Stories
export const GET_SERIE_ALL_STORIES = "GET_SERIE_ALL_STORIES";
export const CLEAN_SERIE_STORIES = "CLEAN_SERIE_STORIES";

export const getSerieStories = (offset = 0, serieId) => dispatch => {
  const publicKey = "809d2a2ba2e23dde5009c0c6e18bbeb3";
  const privateKey = "90844a9f70b1e8eedb0bdfcb597a1524b9a62822";
  const TimeStamp = new Date().getMilliseconds();
  const hash = md5(`${TimeStamp}${privateKey}${publicKey}`);
  const generatedUrl = `https://gateway.marvel.com//v1/public/series/${serieId}/stories`;
  axios({
    method: "GET",
    url: generatedUrl,
    params: {
      ts: TimeStamp,
      apikey: publicKey,
      hash: hash,
      offset: offset
    },
    Headers: {
      Accept: "*/*"
    }
  })
    .then(res => {
      dispatch(
        getAllSerieStories({
          list: res.data.data.results,
          offset: res.data.data.offset
        })
      );
    })
    .catch(err => console.log(err));
};

export const getAllSerieStories = marvelSerieStoriesList => ({
  type: GET_SERIE_ALL_STORIES,
  marvelSerieStoriesList
});

export const cleanSerieStories = () => ({
  type: CLEAN_SERIE_STORIES
});
