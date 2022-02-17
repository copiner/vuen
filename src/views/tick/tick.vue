<template>
    <div class="tick-content">
        <div>{{ tick }}</div>
        <div>{{ table }}</div>
        <div>{{ message }}</div>

        <div>searchTx: {{ searchTx }}</div>
        <div>capTxt : {{ capTxt  }}</div>
        <div class="stick-content">
            <stick v-model="searchTxt"/>
            <stick v-model:title="searchTx" v-model:content="pageCnt"/>
        </div>

        <div class="otick-content">
            <otick v-model.capitalize="capTxt"/>
            <otick v-model:description.capitalize="capTxt"/>
        </div>


    </div>
</template>

<script>
import { ref, reactive, nextTick } from 'vue'
import stick from './components/stick.vue'
import otick from './components/otick.vue'
/*
nextTick
将回调延迟到下次 DOM 更新循环之后执行
将回调推迟到下一个 DOM 更新周期之后执行。在更改了一些数据以等待 DOM 更新后立即使用它

v-model
默认情况下，组件上的 v-model 使用 modelValue 作为 prop 和 update:modelValue 作为事件

<ChildComponent v-model="pageTitle" />

<!-- 是以下的简写: -->

<ChildComponent
  :modelValue="pageTitle"
  @update:modelValue="pageTitle = $event"
/>
*/

export default {
    components: {
        stick,
        otick
    },
    data() {
        return {
          tick: "ticking...",
          searchTxt:"1",
          searchTx:"2",
          pageCnt:"3",
          capTxt:"motorcycles"
        }
    },
    mounted(){
        nextTick(() => {
          // 一些和 DOM 有关的东西
        })
    },
    setup(props,ctx){
        let table = reactive({ tick:true })

        table.tick = false
        nextTick(() => {
          // 一些和 DOM 有关的东西
          table.tick = true
        })

        const message = ref('hello...')
        let changemes = async m =>{
            message.value = "world"
            await nextTick()
            console.log('message is updated')
        }

        return {
            table,
            message
        }
    }
}
</script>
<style scoped>
    .tick-content{
        font-size:.20rem;

        & .stick-content{
            background:#84bf96;
        }

        & .otick-content{
            background:#afb4db;
        }
    }
</style>
