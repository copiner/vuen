// MyBook.vue

import { h, ref, reactive } from 'vue'

export default {
  setup() {
    const readersNumber = ref(0)
    const book = reactive({ title: 'Vue 3 Guide' })
    // 请注意，我们需要在这里显式地使用 ref 值
    return () => h('div', [readersNumber.value, book.title])
  }
}
