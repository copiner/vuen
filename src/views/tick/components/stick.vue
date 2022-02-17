<template>

    <div>{{ stick }}</div>
    <div>---------</div>
    <div>{{ modelValue||"searchTxt" }},{{ title||"title" }},{{ content||"content" }}</div>

    <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)">


</template>

<script>

export default {
    props: {
        title: String,
        content:String,
        modelValue:String
    },
    emits: ['update:title'],
    data() {
      return {
          stick: "tick's child stick"
      }
    }
}
</script>
<style scoped>
    .stick-content{
        font-size:.20rem;
    }
</style>
