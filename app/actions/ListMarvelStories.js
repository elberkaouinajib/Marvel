export const GET_ALL_STORIES = "GET_ALL_STORIES";
export const GET_CHAR_ALL_STORIES = "GET_CHAR_ALL_STORIES";
import md5 from "md5";
import axios from "axios";
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

export const getCharStories = (offset = 0, charId) => dispatch => {
  const publicKey = "809d2a2ba2e23dde5009c0c6e18bbeb3";
  const privateKey = "90844a9f70b1e8eedb0bdfcb597a1524b9a62822";
  const TimeStamp = new Date().getMilliseconds();
  const hash = md5(`${TimeStamp}${privateKey}${publicKey}`);
  const generatedUrl = `https://gateway.marvel.com//v1/public/characters/${charId}/series`;
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
      console.log("redux getCharSeries", res);
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
