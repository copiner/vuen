<template>
    <div class="auth-content">
      <div v-bgcolor="'yellow'">color this text bright yellow</div>
      <button v-btncolor>color this text bright yellow</button>
    </div>
</template>

<script>


export default {
    name: 'auth',
    components: {

    },
    data () {
        return {
        }
    },
    mounted(){

    },
    created(){

    },
    methods:{

    },
    directives: {
        btncolor: {
             beforeMount: function(el, binding) {
                el.style.background = "#" + Math.random().toString(16).slice(2,8);
            }
        }
    }

}
</script>
<style scoped>
  .auth-content{
    font-size:.20rem;
  }
</style>
