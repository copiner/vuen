<template>

    <div>{{ otick }}</div>

    <div>{{ modelValue||"modelValue" }}, {{ description||"description" }}</div>

    <input
      type="text"
      :value="modelValue"
      v-on:input="emitValue">


</template>

<script>

export default {
    props: {
        modelValue:String,
        modelModifiers: {
         default: () => ({
             //console.log('default')
         })
        },
        description:String,
        descriptionModifiers: {
         default: () => ({
             //console.log('default')
         })
        }
    },
    data() {
        return {
          otick: "tick's child otick"
        }
    },
    created() {
        console.log(this.modelModifiers)
        console.log(this.descriptionModifiers)
    },
    emits: ['update:modelValue','update:description'],
    methods: {
        emitValue(e) {
            let value = e.target.value
            if (this.modelModifiers.capitalize) {
                value = value.charAt(0).toUpperCase() + value.slice(1)
            }
            this.$emit('update:modelValue', value)
        }
    }

}
</script>
<style scoped>
    .stick-content{
        font-size:.20rem;
    }
</style>
