
module.exports = {
  //通过使用或创建一个 preset 即可轻松使用一组插件,没有preset，针对不一样语法需要单独配置插件plugin
  presets: [
    ["@babel/preset-env",{
        targets: {//兼容性处理
            edge:"17",
            firefox:"60",
            chrome:"58",
            safari:"10",
            ie: "9"
        },
        corejs: {
          version: 3,
          proposals: true
        },
        //实现根据需要加载
        useBuiltIns:"usage"
    }]
  ],
  plugins:[
    ["@babel/plugin-transform-runtime",{
      corejs:3
    }],
    ['import', {
     libraryName: 'vant',
     libraryDirectory: 'es',
     style: true
    }, 'vant']
  ]
}
