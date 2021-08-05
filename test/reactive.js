/*
@vue/reactivity/dist/reactivity.esm-browser.js
*/

const  Reactive  = require('./src/reactivity.esm-browser.js');


const count = Reactive.ref(1);

Reactive.effect(() => {
    console.log('count的值为：', count.value)
})

setTimeout(() => {
    count.value++;
}, 2000)
