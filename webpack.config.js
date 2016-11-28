const path = require('path');
module.exports = {
  entry: {
    'varsion1/v1': ["./app.js","./index.css"],
    'version2/v2':["./app2.js","./index.css"]
  /*  'stylish.js': ['./index.css'],*/
  },
  // 两个入口地址，webpack之后生成了两个文件，这两个文件在index.html中被引用了。
  output: {

    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].build.js',
  },
  module: {
    loaders: [
            // .css 文件使用 style-loader 和 css-loader 来处理
       { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader', // 在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['es2015'],
        },
      },

    ],
  },

};
