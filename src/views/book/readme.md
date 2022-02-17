### setup

TODO

#### onMounted onUpdated onUnmounted


### Provide / Inject
将依赖注入看作是 `长距离的 prop `

要访问组件实例 property，我们需要将 provide 转换为返回对象的函数,
```
provide() {
    return {
        todoLength: this.todos.length
    }
}
```
默认情况下，provide/inject 绑定并不是响应式的。我们可以通过传递一个 ref property 或 reactive 对象给 provide 来改变这种行为
```
provide() {
  return {
    todoLength: Vue.computed(() => this.todos.length)
  }
}
```
