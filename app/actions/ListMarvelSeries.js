export const GET_ALL_SERIES = "GET_ALL_SERIES";
export const GET_CHAR_ALL_SERIES = "GET_CHAR_ALL_SERIES";
import md5 from "md5";
import axios from "axios";
export const getSeries = (offset = 0) => dispatch => {
  const publicKey = "809d2a2ba2e23dde5009c0c6e18bbeb3";
  const privateKey = "90844a9f70b1e8eedb0bdfcb597a1524b9a62822";
  const TimeStamp = new Date().getMilliseconds();
  const hash = md5(`${TimeStamp}${privateKey}${publicKey}`);
  const generatedUrl = "https://gateway.marvel.com//v1/public/series";
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
        getAllSeries({
          list: res.data.data.results,
          offset: res.data.data.offset
        })
      );
    })
    .catch(err => console.log(err));
};

export const getAllSeries = marvelSeriesList => ({
  type: GET_ALL_SERIES,
  marvelSeriesList
});

export const getCharSeries = (offset = 0, charId) => dispatch => {
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
        getAllCharSeries({
          list: res.data.data.results,
          offset: res.data.data.offset
        })
      );
    })
    .catch(err => console.log(err));
};

export const getAllCharSeries = marvelCharSeriesList => ({
  type: GET_CHAR_ALL_SERIES,
  marvelCharSeriesList
});
