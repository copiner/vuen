<template>
    <div class="sbook-content">{{ name }}</div>
    <input type="text" v-model.name="name"/>
    <div class="sbook-content">{{ sbook }}</div>
    <div class="sbook-content">{{ books }}</div>
    <div class="sbook-content">{{ matchbooks }}</div>
</template>

<script>
import { toRefs,reactive  } from 'vue'
import useBook from './list'
import useMatchbook from './match'

export default {
  data() {
      return {
          sbook: "book's child"
      }
  },
  props: {
      name: String
  },
  setup(props,context) {
      console.log(props)
      //console.log(context)
      /*
      props 是响应式的，你不能使用 ES6 解构，它会消除 prop 的响应性。
      如果需要解构 prop，可以在 setup 函数中使用 toRefs 函数来完成此操作
      */
      const { name }  = toRefs(props)
      const { books, getbooks } = useBook(name)

      const { matched, matchbooks } = useMatchbook(books, name)

      return {
          books,
          matched,
          getbooks,
          matchbooks
      }
  },
  inject: ['todolen'],
  created() {
    console.log(`Injected property: ${this.todolen}`) // > 注入的 property: 5
  }
}
</script>
<style scoped>

</style>
