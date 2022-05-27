
<template>
    <div class="ess-content">
        <ul>
            <li v-for="product in products">
               <input type="number" v-model.number="product.quantity"/>
               {{ product.quantity }}-{{ product.name }}
               <span v-if="product.quantity === 0">
                     -out of stock
               </span>
               <button v-on:click="product.quantity += 1">Add</button>
            </li>
        </ul>
        <h2>Total Inventory: {{ totalProducts }}</h2>
        <button v-on:click="counter += 1">Count</button>
        <span>{{ twiceTheCounter }}</span>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'

// const counter = ref(0)
// watch(counter, (newValue, oldValue) => {
//   console.log('The new counter value is: ' + counter.value)
// })

export default {
    name: 'ess',
    data () {
        return {
           products:[
            {id:1,quantity:1,name:"Compass"},
            {id:2,quantity:0,name:"Jacket"},
            {id:3,quantity:5,name:"Hiking Socks"},
            {id:4,quantity:2,name:"Suntan Lotion"}
           ],
           number:0,
           counter:0
        }
    },
    watch: {
      counter(newValue, oldValue) {
        console.log('The new counter value is: ' + this.counter)
      }
    },
    computed:{
        totalProducts(){
            return this.products.reduce((sum, product) => {
                   return sum + product.quantity
            },0)
        },
        twiceTheCounter(){
            return this.counter * 2
        }
    },
    methods:{

    }
}
</script>
<style scoped>
  .ess-content{
    font-size:.20rem;
  }
</style>
