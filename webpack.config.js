const HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插件

module.exports = {
    entry: './src/main.js',
    module: {
        rules: [{
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }]
    },
    devServer: {
        //服务器的IP地址，可以使用IP也可以使用localhost
        host: 'localhost',
        //服务端压缩是否开启
        compress: true,
        //配置服务端口号
        port: 8090
    },
    //插件
    plugins:[
        new HtmlWebpackPlugin({
            template:'index.html'
        })
    ]
};
