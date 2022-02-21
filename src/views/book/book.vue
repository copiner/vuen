<template>
  <div>{{ todos }}</div>
  <sbook :name="'Jacket'"/>
  <button v-on:click="childto">mbook</button>
</template>

<script>

  import sbook from './components/sbook.vue'

  export default {
    components: {
        sbook
    },
    data() {
        return {
            todos: ['Feed a cat', 'Buy tickets']
        }
    },
    methods:{
        childto() {
            this.$router.push({ path:'/book/mbook' })
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
<style>

</style>
