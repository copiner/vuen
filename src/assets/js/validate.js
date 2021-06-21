//用户名
export function validUsername(str) {
  return /^([\u4E00-\u9FA5]|[a-zA-Z0-9_-]){4,16}$/.test(str);
}

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

//身份证正则
export function validCertNo(cert){
  const pattern = /^[1-9]\d{5}(18|19|2([0-9]))\d{2}(0[0-9]|10|11|12)([0-2][1-9]|10|20|30|31)\d{3}[0-9Xx]$|^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$/

  return pattern.test(cert)
}

//年龄 1-120
export function validAge(age){ 
  const pattern = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/
  return pattern.test(age)
}

// 密码正则 6-16字母数字特殊字符	无强度
export function validPassword(pwd){
	const pattern = /^[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,16}$/
	return pattern.test(pwd)
}

//是否低版本ie浏览器
export function isIE() {
  let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  let isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
  let isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
  if(isIE) {
    let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    let fIEVersion = parseFloat(RegExp["$1"]);
    if(fIEVersion < 10) {
      return true;
    } else
      return false;
  } else {
    return false;
  }
}