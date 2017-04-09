# node 练习库

## 压缩代码的实际效果

经过对比发现，使用压缩模块uglify之后确实能够大幅度压缩代码，原来的js文件有800多kb，经过压缩之后变成了180多kb，但是实际上我只是为了测试代码多写了几行，考虑与引入jquery和lodash这些代码有关系。

## webpack 配置

webpack的配置文件，核心是一个json数据串，webpack通过读取这个json数据串来进行信息的组织。这个json数据串的主要内容包括以下这几个部分

- modules 也就是需要加载的各种文件的loader，如果有less文件，就用到less-loader，有用到jsx，就需要babel-loader等等，有需要引入json的就需要json loader了,当然这些loader也都是需要我们使用npm进行安装才能够生效使用的，单纯地只安装webpack是不能够起作用的。

- plugin 插件。我们也可以看到在webpack中插件的作用是帮助我们更好地管理打包生成的文件。常用的插件有commonChunk合并代码
有压缩代码的UglifyJsPlugin等等，这些插件都能够让打包之后的文件体积更小，要知道在前端开发的过程中，性能很大一部分也来自于加载文件的大小。

- 入口文件和出口文件。我们可以把webpack看成一个黑箱，有一个入口和一个出口，我们无需去管它到底内部是如何操作的，我们只需要指定入口文件和出口文件就ok了。这里主要的是，在这个例子中，我也使用了多个入口文件和多个出口的方式。

## webpack 的好处

webpack的两个鲜明的特征

- 各种loader使得对各种文件能够做到统一管理
- coding-spliting 能够做到动态加载

我在前面也提到过，webpack ，无论是common.js 的require还是 ES6的import方式都是可以实现动态加载的，只是说方式不同而已。




