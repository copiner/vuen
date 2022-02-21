import { h } from 'vue'

export default {
  setup(props, { expose }) {
    const reset = () => {
      // 某些重置逻辑
      console.log("mbook reset")
    }

    // expose 只能被调用一次。
    // 如果需要暴露多个 property，则它们
    // 必须全部包含在传递给 expose 的对象中。
    expose({
      reset
    })

    return () => h('div')
  }
}
