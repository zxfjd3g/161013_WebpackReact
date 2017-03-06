console.log('------', __dirname)
module.exports = {
  //入口js
  entry: __dirname + "/src/js/main.js",
  //输出
  output: {
    path: __dirname,
    filename: "./dist/bundle.js"
  },
  //module
    //loaders
  module: {
    loaders: [
      //babel处理js
      {
        test: /\.js$/,  //正则表达式对象, 匹配目标文件
        exclude: /node_modules/, //排除此文件夹
        loader: 'babel-loader'
      },
      //处理css
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}