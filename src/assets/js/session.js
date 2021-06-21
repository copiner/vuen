/** 新增&&修改本地缓存
 *  @param {string} key 标示
 *  @param {string} value 新增&修改的值
 */
const setItem = (key, value) => {
  let dp = window.sessionStorage.__dp__
  if (!dp) {
    dp = {}
  } else {
    dp = JSON.parse(dp)
    if (!dp[key]) {
      dp[key] = {}
    }
  }
  dp[key] = value
  window.sessionStorage.__dp__ = JSON.stringify(dp)
}
/** 查询本地缓存
 *  @param {string} key 标示
 *  @param {string} def 如果查询不到显示的值
 */
const getItem = (key) => {
  const dp = window.sessionStorage.__dp__
  if (!dp) {
    return null
  }
  const ret = JSON.parse(dp)[key]
  if (!ret) {
    return null
  }
  return ret
}

/** 清除本地缓存
 *  @param {string} key 标示
 *  @param {string} def 如果查询不到显示的值
 */
const removeItem = (key) => {
  let dp = window.sessionStorage.__dp__
  if (!dp) {
    return
  }
  dp = JSON.parse(dp)
  if (!dp[key]) {
    dp[key] = null
  }
  window.sessionStorage.__dp__ = JSON.stringify(dp)
}

const clear = () => {
  window.sessionStorage.removeItem('__dp__')
}


export default {
  setItem,
  getItem,
  removeItem,
  clear
}
