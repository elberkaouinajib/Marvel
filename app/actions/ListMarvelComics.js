export const GET_ALL_COMICS = "GET_ALL_COMICS";
import md5 from "md5";
import axios from "axios";

//Get All Comics
export const getComics = (offset = 0) => dispatch => {
  const publicKey = "809d2a2ba2e23dde5009c0c6e18bbeb3";
  const privateKey = "90844a9f70b1e8eedb0bdfcb597a1524b9a62822";
  const TimeStamp = new Date().getMilliseconds();
  const hash = md5(`${TimeStamp}${privateKey}${publicKey}`);
  const generatedUrl = "https://gateway.marvel.com//v1/public/comics";
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
      console.log("redux Comics", res);
      dispatch(
        getAllComics({
          list: res.data.data.results,
          offset: res.data.data.offset
        })
      );
    })
    .catch(err => console.log(err));
};

export const getAllComics = marvelComicsList => ({
  type: GET_ALL_COMICS,
  marvelComicsList
});

//Char Comics
export const GET_CHAR_ALL_COMICS = "GET_CHAR_ALL_COMICS";
export const CLEAN_CHAR_COMICS = "CLEAN_CHAR_COMICS";

export const getCharComics = (offset = 0, charId) => dispatch => {
  const publicKey = "809d2a2ba2e23dde5009c0c6e18bbeb3";
  const privateKey = "90844a9f70b1e8eedb0bdfcb597a1524b9a62822";
  const TimeStamp = new Date().getMilliseconds();
  const hash = md5(`${TimeStamp}${privateKey}${publicKey}`);
  const generatedUrl = `https://gateway.marvel.com//v1/public/characters/${charId}/comics`;
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
        getAllCharComics({
          list: res.data.data.results,
          offset: res.data.data.offset
        })
      );
    })
    .catch(err => console.log(err));
};

export const getAllCharComics = marvelCharComicsList => ({
  type: GET_CHAR_ALL_COMICS,
  marvelCharComicsList
});

export const cleanCharComics = () => ({
  type: CLEAN_CHAR_COMICS
});

//Serie Comics
export const GET_SERIE_ALL_COMICS = "GET_SERIE_ALL_COMICS";
export const CLEAN_SERIE_COMICS = "CLEAN_SERIE_COMICS";

export const getSerieComics = (offset = 0, serieId) => dispatch => {
  const publicKey = "809d2a2ba2e23dde5009c0c6e18bbeb3";
  const privateKey = "90844a9f70b1e8eedb0bdfcb597a1524b9a62822";
  const TimeStamp = new Date().getMilliseconds();
  const hash = md5(`${TimeStamp}${privateKey}${publicKey}`);
  const generatedUrl = `https://gateway.marvel.com//v1/public/series/${serieId}/comics`;
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
        getAllSerieComics({
          list: res.data.data.results,
          offset: res.data.data.offset
        })
      );
    })
    .catch(err => console.log(err));
};

export const getAllSerieComics = marvelSerieComicsList => ({
  type: GET_SERIE_ALL_COMICS,
  marvelSerieComicsList
});

export const cleanSerieComics = () => ({
  type: CLEAN_SERIE_COMICS
});

//Story Series
export const GET_STORY_ALL_COMICS = "GET_STORY_ALL_COMICS";
export const CLEAN_STORY_COMICS = "CLEAN_STORY_COMICS";

export const getStoryComics = (offset = 0, storyId) => dispatch => {
  const publicKey = "809d2a2ba2e23dde5009c0c6e18bbeb3";
  const privateKey = "90844a9f70b1e8eedb0bdfcb597a1524b9a62822";
  const TimeStamp = new Date().getMilliseconds();
  const hash = md5(`${TimeStamp}${privateKey}${publicKey}`);
  const generatedUrl = `https://gateway.marvel.com//v1/public/stories/${storyId}/comics`;
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
        getAllStoryComics({
          list: res.data.data.results,
          offset: res.data.data.offset
        })
      );
    })
    .catch(err => console.log(err));
};

export const getAllStoryComics = marvelStoryComicsList => ({
  type: GET_STORY_ALL_COMICS,
  marvelStoryComicsList
});

export const cleanStoryComics = () => ({
  type: CLEAN_STORY_COMICS
});
