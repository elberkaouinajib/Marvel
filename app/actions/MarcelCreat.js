export const GET_CREAT_INFO = "GET_CREAT_INFO";
import md5 from "md5";
import axios from "axios";
export const getCreatorInfo = creatId => dispatch => {
  const publicKey = "809d2a2ba2e23dde5009c0c6e18bbeb3";
  const privateKey = "90844a9f70b1e8eedb0bdfcb597a1524b9a62822";
  const TimeStamp = new Date().getMilliseconds();
  const hash = md5(`${TimeStamp}${privateKey}${publicKey}`);
  const generatedUrl = `https://gateway.marvel.com//v1/public/creators/${creatId}`;
  console.log(generatedUrl);
  axios({
    method: "GET",
    url: generatedUrl,
    params: {
      ts: TimeStamp,
      apikey: publicKey,
      hash: hash
    },
    Headers: {
      Accept: "*/*"
    }
  })
    .then(res => {
      console.log("redux", res);
      dispatch(getCreat(res.data.data.results[0]));
    })
    .catch(err => console.log(err));
};

export const getCreat = marvelCreat => ({
  type: GET_CREAT_INFO,
  marvelCreat
});