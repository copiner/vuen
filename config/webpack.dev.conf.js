const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const Webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const env = require('./dev');
const url = "http://192.168.23.197:8093"

console.log(process.env.NODE_ENV)

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    publicPath: '/smkPublicH5/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // 不编译node_modules下的文件
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
        options: {
          limit: 8*1024,
          esModule: false, //think serious
          outputPath: "/imgs"
        }
      },
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          "postcss-loader"
        ]
      },
      // {//vant
      //   test: /\.css$/,
      //   include: [
      //     path.resolve(__dirname, '../node_modules/vant'),
      //   ],
      //   use: [
      //       "style-loader",
      //       'css-loader'
      //     ]
      // }
    ]
  },
  plugins: [
    new Webpack.DefinePlugin({
     // 'SERVICE_URL': JSON.stringify("api"),
     'process.env': env
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      title: '公共服务',
      filename: 'index.html',
      favicon: path.resolve(__dirname, '../public/favicon.ico')
    }),
    new VueLoaderPlugin(),
    new Webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new Webpack.NoEmitOnErrorsPlugin()
  ],
  target: "web",//bug
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    // compress: true,
    publicPath: '/',
    historyApiFallback: true,
    host:"192.168.1.123",
    port: 8000,
    hot: true,
    proxy: {
     '/api': {
       target: url,
       changeOrigin:true,
       pathRewrite: {'^/api' : ''}
     }
   }
  }
}
