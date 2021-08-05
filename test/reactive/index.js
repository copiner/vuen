/*
Vue3中使用了ES6提供的ProxyAPI取代了之前defineProperty来实现对数据的侦测.

@vue/reactivity/dist/reactivity.esm-browser.js
vue独立的响应式模块，可以与任何框架配合,使用proxy

let data = { foo: 'foo', ary: [1, 2, 3] }
let r = reactive(data)
effect(()=>console.log(r.ary.length))
r.ary.unshift(1)  // 4
------
const { reactive, effect } = VueObserver
let data = { foo: 'foo', ary: [1, 2, 3] }
let r = reactive(data)
effect(()=>console.log(r.ary))
r.ary.unshift(1)  // 没有打印
-------
const { reactive, effect } = VueObserver
let data = { foo: 'foo', ary: [1, 2, 3] }
let r = reactive(data)
effect(()=>console.log(r))
r.foo = 1   // 啥也没打印
--------
const { reactive, effect } = VueObserver
let data = { foo: 'foo', ary: [1, 2, 3] }
let r = reactive(data)
effect(()=>console.log(r.foo))
r.foo = 1   // 1
------
const { reactive,effect } = VueObserver
let data = { foo: 'foo', ary: [1, 2, 3] }
let r = reactive(data)
effect(()=>console.log(r.ary.join()))
r.ary.unshift(1)


*/

const  { reactive, effect }  = require('./reactivity.js');

let data = { foo: 'foo', ary: [1, 2, 3] }
let r = reactive(data); //proxy

var efe = effect((args)=>{
  console.log('args',args)
  //console.log(r.ary.length)
})

effect((args1)=>{
  console.log('args1',args1)
  //console.log(r.ary.length)
})

efe("abc")
//r.ary.unshift(1)  // 4
//delete r.foo
//r.foo = '100'
r.foo



/*

const  Reactive  = require('../src/reactivity.esm-browser.js');
const count = Reactive.ref(1);

Reactive.effect(() => {
    console.log('count: ', count.value)
})

setTimeout(() => {
    count.value++;
}, 2000)

*/
