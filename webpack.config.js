const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {argv, argv0,execArgv, execPath, env, cmd}  = process
//const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: [
          'style-loader', // 将 css-loader 依赖分析后的内容挂载到 dom 的 style 标签内，必须放置在 'css-loader'前面
          'css-loader' // 处理 import './index.css' 依赖
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
          // {
          //   loader: 'url-loader',
          //   options: {
          //     limit: 1000000000
          //   }
          // }
        ]
      },
      {
        test: /\.(csv|tsv)/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
          ]
      }
    ]
  },
  plugins: [ // 插件的用途：从打包优化和压缩，一直到重新定义环境中的变量
    new HtmlWebpackPlugin({template: './index.html'}),
    //new ExtractTextPlugin({filename: "styles.bundle.css"}) ///fail：未成功分离 css
  ],
  mode: 'development'
}