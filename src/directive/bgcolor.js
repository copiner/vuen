/*
指令的注册方式和「过滤器」「混入」「组件」注册的方式一样都分为两种：一是全局注册，二是局部注册


Vue 提供了自定义指令的5个钩子函数：

bind：指令第一次绑定到元素时调用，只执行一次。在这里可以进行一次性的初始化设置。

inserted：被绑定的元素，插入到父节点的 DOM 中时调用（仅保证父节点存在）。

update：组件更新时调用。

componentUpdated：组件与子组件更新时调用。

unbind：指令与元素解绑时调用，只执行一次。

-----------------------------------------------------------------------

bind()：当指令绑定在 HTML 元素上时触发

inserted()：当指令绑定的元素插入到父节点中的时候触发

update()：当指令绑定的元素状态/样式、内容(这里指元素绑定的 vue 数据) 发生改变时触发

componentUpdated()：当 update() 执行完毕之后触发

unbind()：当指令绑定的元素从 dom 中删除时触发

*/

export default function(app){

  app.directive('bgcolor', {
      beforeMount: function(el, binding, vnode) {
          el.style.background = binding.value
      }
  })

}
