import {PRODUCTION} from '../config';
import axios from 'axios';
import store from '../store/configureStore';
let endpoint = PRODUCTION ? "http://casctawebadmin-001-site3.itempurl.com" :  "http://localhost:12273" ;
console.log(endpoint);
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

function checkForAuthError(response) {
  if(response.status === 401 && PRODUCTION) {
    store().dispatch(unauthorizedException());
  }
  return response;
}
function logErrors(e) {
  console.error(e);
  return e.response;
}

export default {
  get: (url, data, config) => axios.get(joinUrls(endpoint, url), mangleConfig(config)).then(checkForAuthError).catch(logErrors),
  post: (url, data, config) => axios.post(joinUrls(endpoint, url), data, mangleConfig(config)).then(checkForAuthError).catch(logErrors),
  put: (url, data, config) => axios.put(joinUrls(endpoint, url), data, mangleConfig(config)).then(checkForAuthError).catch(logErrors),
  delete: (url, data, config) => axios.delete(joinUrls(endpoint, url), mangleConfig(config)).then(checkForAuthError).catch(logErrors),
  absoluteUrl: (relative) => joinUrls(endpoint, relative)
};
