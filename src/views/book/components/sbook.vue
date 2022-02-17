<template>
  <div class="book-content">{{ sbook }}</div>
</template>

<script>

export default {
  data() {
      return {
          sbook: "book's child"
      }
  },
  inject: ['todolen'],
  created() {
    console.log(`Injected property: ${this.todolen}`) // > 注入的 property: 5
  }
}
</script>
<style scoped>
    .book-content{
        font-size:.20rem;
    }
</style>
