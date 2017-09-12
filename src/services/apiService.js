
import axios from 'axios';
import store from '../store/configureStore';
let endpoint = "http://localhost:12273/";
import {unauthorizedException} from '../actions/logonFormActions';
function joinUrls(one, two) {
  if(one && one[one.length-1] === '/') one = one.slice(0, one.length-1);
  if(two && two[0] === '/') two = two.slice(1);
  return `${one}/${two}`;
}

function mangleConfig(config) {
  if(typeof config !== 'object')
    config = {};
  let mangledConfig = { ...config, withCredentials: true,headers:{...config.headers,'Access-Control-Allow-Origin': '*'}};
  return mangledConfig;
}
const DEVELOPMENT=true;

function checkForAuthError(error) {
  console.log(error);
  if(error && error.response && error.response.status === 401 && !DEVELOPMENT) {
    store().dispatch(unauthorizedException());
    return;
  }
  throw error;
}

export default {
  get: (url, data, config) => axios.get(joinUrls(endpoint, url), mangleConfig(config)).catch(checkForAuthError),
  post: (url, data, config) => axios.post(joinUrls(endpoint, url), data, mangleConfig(config)).catch(checkForAuthError),
  put: (url, data, config) => axios.put(joinUrls(endpoint, url), data, mangleConfig(config)).catch(checkForAuthError),
  delete: (url, data, config) => axios.delete(joinUrls(endpoint, url), mangleConfig(config)).catch(checkForAuthError),
  absoluteUrl: (relative) => joinUrls(endpoint, relative)
};
