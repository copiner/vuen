<template>
    <div class="auth-content">
    <div class="pr">
      <div v-bgcolor="'yellow'">color this text bright yellow</div>
    </div>
    <button v-btncolor="'1'">ABC</button>
    <button v-btncolor="'1'">DEF</button>
    <button v-btncolor="'-1'">GHI</button>
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
      console.log('mounted')
    },
    created(){
      console.log('created')
    },
    activated(){
      console.log('activated')
    },
    methods:{

    },
    directives: {
        btncolor: {
             beforeMount: function(el, binding) {
                el.style.background = "#" + Math.random().toString(16).slice(2,8);

            },
            mounted:function(el, binding){
              console.log(binding.value)
              if(binding.value === '-1'){
                {el.remove()}
              }
              //console.log(el.parentNode)
              //el.remove()
              //el.parentNode && el.parentNode.removeChild(el);
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
