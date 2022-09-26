/*
boss 系统支付宝转账用户信息录入
*/
import Util from '../assets/js/util';
// import Service from './index'
import API from './api'

export default {

  // bookl:(data)=> Service.post(API.xxx, {
  //
  // }),
  bookl: data => {

      if(data === 'Jacket'){
          return [
              {id:2,quantity:0,name:"Jacket"},
          ]
      } else {
          return [
              {id:1,quantity:1,name:"Compass"},
              {id:2,quantity:0,name:"Jacket"},
              {id:3,quantity:5,name:"Hiking Socks"},
              {id:4,quantity:2,name:"Suntan Lotion"}
          ]
      }

  }

}
