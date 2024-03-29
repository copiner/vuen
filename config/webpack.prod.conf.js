// webpack.config.js
const path = require('path');
const Webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader/dist/index');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const env = require('./prod');

module.exports = {
    entry:  path.join(__dirname, '../src/main.js'),
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: './js/[name].bundle.js',
        path: path.join(__dirname, '../dist'),
        publicPath: env.ASSERT_PATH
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader:"babel-loader",
                exclude: /node_modules/
            },
            {
              test: /\.(png|jpg)$/,
              loader: 'url-loader',
              options: {
                limit: 8*1024,
                esModule: false,
                outputPath: "/imgs"
              }
            },
            {
               test: /\.css$/,
               // exclude: /node_modules/,
               use: [
                   MiniCssExtractPlugin.loader,
                   {
                     loader: 'css-loader',
                     options: {
                       importLoaders: 1
                     }
                   },
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
    plugins:[
        new Webpack.DefinePlugin({
         // 'SERVICE_URL': JSON.stringify("api"),
         'process.env': env
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
          title: '公共服务',
          template:path.resolve(__dirname, '../public/index.html'),
          filename: "index.html",
          favicon: path.resolve(__dirname, '../public/favicon.ico')
        }),
        new MiniCssExtractPlugin({
          filename: "./css/[name][chunkhash].css",
          chunkFilename: "./css/[id][chunkhash].css"
        }),
        new CleanWebpackPlugin(),
        // new BundleAnalyzerPlugin()
    ],
    // resolve: {
    //     // 自动补全的扩展名
    //     //extensions: ['.js', '.vue', '.json'],
    //     // 默认路径代理
    //     // 例如 import Vue from 'vue'，会自动到 'vue/dist/vue.common.js'中寻找
    //     // 这样可以使之后在开发项目的时候, 引用文件时不必关注不同层级的问题
    //     alias: {
    //         'vue$': 'vue/dist/vue.esm.js' //内部为正则表达式  vue结尾的
    //     }
    // },
    optimization: {

      splitChunks: {
        chunks: 'async',
        minSize: 20000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },

    }
}
