/*
  arr
*/
let data = [1,2,3]
let p = new Proxy(data, {
    get(target, key, receiver) {
        // target 目标对象，这里即data
        console.log('get value:', key)
        return target[key]
    },
    set(target, key, value, receiver) {
        // receiver 最初被调用的对象。通常是proxy本身，但handler的set方法也有可能在原型链上或以其他方式被间接地调用（因此不一定是proxy本身）。
        // 比如，假设有一段代码执行 obj.name = "jen"，obj不是一个proxy且自身不含name属性，但它的原型链上有一个proxy，那么那个proxy的set拦截函数会被调用，此时obj会作为receiver参数传进来。
        console.log('set value:', key, value)
        target[key] = value
        return true // 在严格模式下，若set方法返回false，则会抛出一个 TypeError 异常。
    }
})
//p.length = 4   // set value: length 4
//console.log(data)   // [1, 2, 3, empty]
//p.push(1)
//p.shift()



/*
  obj
*/
let data1 = {a:1,b:{c:'c'},d:[1,2,3]}
let p1 = new Proxy(data1, {
  get(target, key, receiver) {
      // target 目标对象，这里即data
      console.log('get value1:', key)
      return target[key]
  },
  set(target, key, value, receiver) {
      // receiver 最初被调用的对象。通常是proxy本身，但handler的set方法也有可能在原型链上或以其他方式被间接地调用（因此不一定是proxy本身）。
      // 比如，假设有一段代码执行 obj.name = "jen"，obj不是一个proxy且自身不含name属性，但它的原型链上有一个proxy，那么那个proxy的set拦截函数会被调用，此时obj会作为receiver参数传进来。
      console.log('set value1:', key, value)
      target[key] = value
      return true // 在严格模式下，若set方法返回false，则会抛出一个 TypeError 异常。
  }
})
//console.log(p1.a)
//console.log(p1.b.c)
// console.log(p1.d)
// console.log(p1.d[0])

//p1.e = 'e'

/*
  Reflect
  ES6提供了ReflectAPI,且与Proxy的traps一一对应,用来代替 Object 的默认行为
*/

let data2 = {a:2,b:{c:'c'},d:[1,2,3]}
let p2 = new Proxy(data2, {
    get(target, key, receiver) {
        console.log('get value2:', key)
        const res = Reflect.get(target, key, receiver)
        return res
    },
    set(target, key, value, receiver) {
        console.log('set value2:', key, value)
        // 如果赋值成功，则返回true
        const res = Reflect.set(target, key, value, receiver)
        return res
    }
})

p2.e = 'e'
