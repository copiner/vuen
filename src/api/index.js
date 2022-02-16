/*
  axios 请求封装
*/
import axios from 'axios'
import { Toast } from 'vant';
// import { v4 as uuidv4 } from 'uuid';
import Session from '../assets/js/session';

axios.defaults.timeout = 16000;
axios.defaults.headers['Content-Type'] = 'application/json'
//axios.defaults.baseURL = process.env.BASE_API_SEV;

/*
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
*/

//加密
// const encodeSearchParams = (obj) => {
//   if (!obj) return ''
//   return Object.keys(obj).map(key => obj[key] ? (`${key}=${encodeURIComponent(obj[key])}`) : '').filter(i => i).join('&')
// }
//
// config.data = encodeSearchParams(config.data)

axios.interceptors.request.use(async config => {

  // if(config.method === 'post'){
  //   config.data.accessToken = Session.getItem("accesstoken");
  //   //config.data.reqsn = uuidv4();
  // }
  // if(config.method === 'get' && config.params){
  //   config.params.accessToken = Session.getItem("accesstoken");
  // }

  return config
}, async err => {
  // return Promise.reject(err)
  console.log(err)
})

// Add a response interceptor
/*
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});
*/

axios.interceptors.response.use(async response => {

  // let code = response.data.code;
  // if (code == 'PY10001') {
  //   //Session.clear();
  //   //return;
  // }
  return response.data

}, async err => {
  Toast(err)
  //Session.clear();
  return false;
})


export default {
  get:(url, params) => axios.get(url,{ params }),
  post:(url, data) => axios.post(url, data||{}),
  put:(url, data) => axios.put(url, data),
  delete:() => axios.delete(url, data)
}
