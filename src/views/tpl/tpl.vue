
<template>
    <div ref="root">This is a ref</div>
</template>

<script>
import { ref, onMounted } from 'vue'


export default {
    name: 'tpl',
    data () {
        return {

        }
    },
    watch: {

    },
    computed:{

    },
    methods:{

    },
    setup() {
      const root = ref(null)

      onMounted(() => {
        // DOM 元素将在初始渲染后分配给 ref
        console.log(root.value) // <div>This is a root element</div>
      })

      return {
        root
      }
    }

}
</script>
<style scoped>
  .ess-content{
    font-size:.20rem;
  }
</style>
