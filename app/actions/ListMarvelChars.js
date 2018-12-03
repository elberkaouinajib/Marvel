export const GET_ALL_CHARS = "GET_ALL_CHARS";
import md5 from "md5";
import axios from "axios";

//All Chars
export const getCharacters = (offset = 0) => dispatch => {
  const publicKey = "809d2a2ba2e23dde5009c0c6e18bbeb3";
  const privateKey = "90844a9f70b1e8eedb0bdfcb597a1524b9a62822";
  const TimeStamp = new Date().getMilliseconds();
  const hash = md5(`${TimeStamp}${privateKey}${publicKey}`);
  const generatedUrl = "https://gateway.marvel.com//v1/public/characters";
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
        getAllChars({
          list: res.data.data.results,
          offset: res.data.data.offset
        })
      );
    })
    .catch(err => console.log(err));
};

export const getAllChars = marvelCharsList => ({
  type: GET_ALL_CHARS,
  marvelCharsList
});

//Serie Chars
export const GET_SERIE_ALL_CHARS = "GET_SERIE_ALL_CHARS";
export const CLEAN_SERIE_CHARS = "CLEAN_SERIE_CHARS";

export const getSerieChars = (offset = 0, SerieId) => dispatch => {
  const publicKey = "809d2a2ba2e23dde5009c0c6e18bbeb3";
  const privateKey = "90844a9f70b1e8eedb0bdfcb597a1524b9a62822";
  const TimeStamp = new Date().getMilliseconds();
  const hash = md5(`${TimeStamp}${privateKey}${publicKey}`);
  const generatedUrl = `https://gateway.marvel.com//v1/public/series/${SerieId}/characters`;
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
        getSerieAllChars({
          list: res.data.data.results,
          offset: res.data.data.offset
        })
      );
    })
    .catch(err => console.log(err));
};

export const getSerieAllChars = marvelSerieCharsList => ({
  type: GET_SERIE_ALL_CHARS,
  marvelSerieCharsList
});

export const cleanSerieChars = () => ({
  type: CLEAN_SERIE_CHARS
});

//Comic Chars
export const GET_COMIC_ALL_CHARS = "GET_COMIC_ALL_CHARS";
export const CLEAN_COMIC_CHARS = "CLEAN_COMIC_CHARS";

export const getComicChars = (offset = 0, ComicId) => dispatch => {
  const publicKey = "809d2a2ba2e23dde5009c0c6e18bbeb3";
  const privateKey = "90844a9f70b1e8eedb0bdfcb597a1524b9a62822";
  const TimeStamp = new Date().getMilliseconds();
  const hash = md5(`${TimeStamp}${privateKey}${publicKey}`);
  const generatedUrl = `https://gateway.marvel.com//v1/public/comics/${ComicId}/characters`;
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
        getComicAllChars({
          list: res.data.data.results,
          offset: res.data.data.offset
        })
      );
    })
    .catch(err => console.log(err));
};

export const getComicAllChars = marvelComicCharsList => ({
  type: GET_COMIC_ALL_CHARS,
  marvelComicCharsList
});

export const cleanComicChars = () => ({
  type: CLEAN_COMIC_CHARS
});

//Story Chars
export const GET_STORY_ALL_CHARS = "GET_STORY_ALL_CHARS";
export const CLEAN_STORY_CHARS = "CLEAN_STORY_CHARS";

export const getStoryChars = (offset = 0, StoryId) => dispatch => {
  const publicKey = "809d2a2ba2e23dde5009c0c6e18bbeb3";
  const privateKey = "90844a9f70b1e8eedb0bdfcb597a1524b9a62822";
  const TimeStamp = new Date().getMilliseconds();
  const hash = md5(`${TimeStamp}${privateKey}${publicKey}`);
  const generatedUrl = `https://gateway.marvel.com//v1/public/stories/${StoryId}/characters`;
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
        getStoryAllChars({
          list: res.data.data.results,
          offset: res.data.data.offset
        })
      );
    })
    .catch(err => console.log(err));
};

export const getStoryAllChars = marvelStoryCharsList => ({
  type: GET_STORY_ALL_CHARS,
  marvelStoryCharsList
});

export const cleanStoryChars = () => ({
  type: CLEAN_STORY_CHARS
});
