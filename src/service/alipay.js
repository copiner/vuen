/*
boss 系统支付宝转账用户信息录入
*/
import Util from '../assets/js/util';
import Service from './index'
import API from './api'

let openapi = process.env.ENV == "production" ? "https://abs" : "http://vba/gateway";
let appId = process.env.ENV == "production" ? "" : "3070529067680";
let openId = process.env.ENV == "production" ? "" : "3070529067680";
export default {

  subacc:(data)=> Service.post(openapi, {
    appId:appId,
    reqSeq:Util.timestamp(),
    method:API.ALIPAY.SUBMIT,
    sign:API.ALIPAY.SUBMIT,
    bizContent:JSON.stringify({
      ...data,
      openId:openId,
      reqsn:Util.getUuid()
    })
  })

}
