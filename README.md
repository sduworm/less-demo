# 最简WEBPACK HTML CSS工程

### 说明
- 使用less开发
- src目录存放源码，main.less是样式源码，main.js只起到引用less的目的
- dist是build打包后的输出文件，可以使用任何静态server拉起来看效果
- app是compile编译less后的输出文件，可以直接在浏览器中看效果
- 根目录index.html是纯HTML，它引用了CDN上的bootstrap。它默认引用了main.css，以供less编译后可正常引用。它未引用main.js，这个引用是由webpack打包完成的。
