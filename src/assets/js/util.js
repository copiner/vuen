
//工具类
const Util = {

    /**
   * 获取url的参数值
   * @parm key url的参数key值
   * @date 2021/05/25
   */
  getUrlSearch : function (key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");
    var after = window.location.search || window.location.hash;
    var r = after.substr(1).match(reg);
    //console.log(window.location.search)
    if (r != null) return decodeURI(r[2]);
    return null;
  },

  //随机18位数
  getUuid(){
    const s = [];
    const hexDigits = "0123456789abcdef";
    for (let i = 0; i < 22; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[21] = hexDigits.substr((s[18] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[3] = s[8] = s[13] = s[18] = "";
    const uuid = s.join("");
    return uuid;
  },

  timestamp(){
    return new Date().getTime()+""+parseInt(Math.random()*10000);
  },

  //姓名脱敏 第2位用*代替（不论中英文）
  nameHide:function(name){
    // var reg=(name.length>2)?/^(.{1})(.*)(.{1})$/:/^(.{1})(.*)$/;
    // var _name=name.replace(reg,function(a,b,c,d){
    //   return b+c.replace(/./g,"*")+((name.length>2)?d:"");
    // });
    var _name = name.length>2?(name.substr(0,1)+'*'+name.substr(2,name.length)):name.substr(0,1)+'*'
    return _name
  },

  //名字脱敏
  hideName(name){
    name = name || '';
    var reg=/^(.*)(.{1})$/;
    var _name=name.replace(reg,function(a,b,c){
      return b.replace(/./g,"*")+c;
    });
    return _name
  },

  //手机号脱敏  保留首3位 尾4位 150****1234
  mobileHide:function(mobile){
    var reg=/^(.{3})(.*)(.{4})$/;
    var _mobile=mobile.replace(reg,function(a,b,c,d){
      return b+c.replace(/./g,"*")+d;
    });
    return _mobile
  },
  //证件号脱敏 15位及以上，保留前4后3，其他*代替；15位以下，保留前、后各1位，其他*代替
  certHide:function(cert){
    var reg= cert.length>=15?/^(.{4})(.*)(.{3})$/:/^(.{1})(.*)(.{1})$/;
    var _cert=cert.replace(reg,function(a,b,c,d){
      return b+c.replace(/./g,"*")+d;
    });
    return _cert
  },
  //保留前、后各1位，其他*代替
  ooHide:function(cert){
    var reg= /^(.{1})(.*)(.{1})$/;
    var _cert=cert.replace(reg,function(a,b,c,d){
      return b+c.replace(/./g,"*")+d;
    });
    return _cert
  },

  //姓名正则
  validName:function(name){
    //2-30个汉字 或 2-30个英文+空格
    var pattern = /^[\u4e00-\u9fa5]{2,30}$|^[a-zA-Z ]{2,30}$/;
    return pattern.test(name)
  },

  //身份证正则
  validCertNo:function(cert){
    const pattern = /^[1-9]\d{5}(18|19|2([0-9]))\d{2}(0[0-9]|10|11|12)([0-2][1-9]|10|20|30|31)\d{3}[0-9Xx]$|^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$/

    return pattern.test(cert)
  },

  //手机号正则
  validMobile:function(mobile){
    return /^1\d{10}$/.test(mobile)
  },

  //验证码正则
  validCode:function(code){
    return /^\d{6}$/.test(code)
  },

  //根据身份证号获取日期
  getDateFromCert:function(cert){
    var arrBirth = [];
    if(cert.length == 18){//处理18位的身份证号码从号码中得到生日和性别代码
      arrBirth = [cert.substr(6, 4),cert.substr(10, 2),cert.substr(12, 2)]
    }
    if(cert.length == 15) {
      var birthYearFlag = cert.charAt(6)+cert.charAt(7);
      var borthYear = "";
      if(parseInt(birthYearFlag)<10){
        borthYear = "20" + cert.substr(6, 2)
      }else{
        borthYear = "19" + cert.substr(6, 2)
      }
      arrBirth = [borthYear,cert.substr(8, 2),cert.substr(10, 2)]
    }
    return arrBirth;
  },

  debounce(fn, delay) {

      var delay = delay || 200;
      var timer;
      return function () {
          var th = this;
          var args = arguments;
          if (timer) {
              clearTimeout(timer);
          }
          timer = setTimeout(function () {
              timer = null;
              fn.apply(th, args);
          }, delay);
      };
  },

  /*
  YYYY-MM-SS HH:mm:ss  --> timestamp
  */
  time2sec(dateStr) {

      if (!dateStr) {
        return new Date();
      }

      if (dateStr.indexOf('/') > -1) {
        return new Date(dateStr).getTime();
      } else {
        return new Date(dateStr.replace(/-/g, '/')).getTime();
      }
  },

  dateformat(date, fmt){
      var o = {
         "M+" : date.getMonth()+1,                 //月份
         "d+" : date.getDate(),                    //日
         "h+" : date.getHours(),                   //小时
         "m+" : date.getMinutes(),                 //分
         "s+" : date.getSeconds(),                 //秒
         "q+" : Math.floor((date.getMonth()+3)/3), //季度
         "S"  : date.getMilliseconds()             //毫秒
     };
     if(/(y+)/.test(fmt)) {
             fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
     }
      for(var k in o) {
         if(new RegExp("("+ k +")").test(fmt)){
              fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
          }
      }
     return fmt;

  }

}


export default Util
