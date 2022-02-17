<template>
  <div class="book-content">{{ readersNumber }} {{ book.title }}</div>
  <div class="book-content">{{ todos }}</div>
  <sbook />
</template>

<script>
  import { ref, reactive, onMounted, onUpdated, onUnmounted } from 'vue'
  import sbook from './components/sbook.vue'

  export default {
    components: {
        sbook
    },
    setup() {
        const readersNumber = ref(0)
        const book = reactive({ title: 'Vue 3 Guide' })

        onMounted(() => {
            console.log('mounted!')
        })
        onUpdated(() => {
            console.log('updated!')
        })
        onUnmounted(() => {
            console.log('unmounted!')
        })

        // 暴露给模板
        return {
            readersNumber,
            book
        }
    },
    data() {
        return {
            todos: ['Feed a cat', 'Buy tickets']
        }
    },

    provide() {
        return {
            todolen: this.todos.length
        }
    },
    activated(){
      console.log('book activated')
    },
    deactivated(){
      console.log('book deactivated')
    }

  }
</script>
<style scoped>
  .book-content{
    font-size:.20rem;
  }
</style>
