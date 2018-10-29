const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        //配置服务端口号
        port: 8090
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'index.html'
        })
    ]
};
