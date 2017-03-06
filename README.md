1. 下载相关模块包
  * react相关库
    ```
    npm install react react-dom --save
    ```
  * babel相关库
    ```
    npm install babel-core babel-preset-es2015 babel-preset-react --save-dev
    ```
  * webpack相关库
    ```
    // 不使用webpack2.x的版本
    npm install webpack@1.13.0 --save-dev
    npm install webpack-dev-server@1 --save-dev
    npm install babel-loader style-loader css-loader --save-dev
    ```
2. webpack配置文件: webpack.config.js
  ```
  //__dirname: 当前项目的绝对路径
  module.exports = {
    //入口js
    entry: __dirname + "/src/js/main.js",
    
    //输出
    output: {
      path: __dirname,
      filename: "./dist/bundle.js"
    },
  
    module: {
  
      loaders: [
        //babel处理js
        {
          test: /\.js?$/,
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
  ```
3. babel配置文件: .babelrc
  ```
  {
    "presets": ["es2015", "react"]  
  }
  ```
4. 编码
  * src/App.js: 应用组件
    ```
    import React from 'react'
    export default function App() {
      return <h1>Hello React Client Component</h1>
    }
    ```
  * src/main.js: 入口js
    ```
    import React from 'react'
    import ReactDOM from 'react-dom'
    import App from './App'
    
    //渲染组件标签到页面元素
    ReactDOM.render(<App />, document.getElementById('demo'))
    ```
  * index.html
    ```
    <div id="demo"></div>
    <script type="text/javascript" src="./dist/bundle.js"></script>
    ```
  * src/css/test.css
    ```
    body {
      background: blue;
    }
    //在main.js中引入css
    import '../css/test.css'
    ```
* package.json: 添加编译/运行脚本
  ```
  "scripts": {
    "start": "webpack-dev-server --contentbase src --inline --hot",
    "build": "webpack"
  }
  ```
