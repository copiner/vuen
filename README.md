### 公共服务

```
webpack5 vue3
```
###内置组件

内置组件可以直接在模板中使用，而不需注册。

<keep-alive>、<transition>、<transition-group> 和 <teleport> 组件都可以被打包工具 tree-shake。所以它们只会在被使用的时候被引入。如果你需要直接访问它们，也可以将它们显性导入。

#### keep-alive
日常开发中，如果需要在组件切换时，保存组件的状态，防止它多次销毁，多次渲染，我们通常采用 <keep-alive> 组件处理，因为它能够缓存不活动的组件，而不是销毁它们。同时， <keep-alive> 组件不会渲染自己的 DOM 元素，也不会出现在组件父链中，属于一个抽象组件。当组件在  <keep-alive> 内被切换时，它的 activated 和 deactivated 这两个钩子函数将会被对应执行
