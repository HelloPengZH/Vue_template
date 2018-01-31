var htmlWP = require('html-webpack-plugin');
module.exports={
    entry:'./src/main.js',
    output: {
        path:__dirname+'/dist',
        filename:'biuld.js'
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|jpeg|gif|ttf|jpg)$/,
                loader: 'url-loader?limit=20000&name=images/[hash:8].[name].[ext]'
            },
            {
                test: /\.js$/,  // 将.js文件中的es6语法转成es5语法
                loader:'babel-loader',
                exclude:/node_modules/ 
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                  name: '[name].[ext]?[hash]'
                }
            },
        
            {
                test: /.vue$/,  // 解析 .vue 组件页面文件
                loader:'vue-loader' //
            }
        ]
    },
    babel:{
        presets:['es2015'],  // 配置将es6语法转换成es5语法
        plugins:['transform-runtime']
    },
    plugins: [
        new htmlWP({
            title: '首页',  //生成的页面标题
            filename: 'index.html', //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
            template: 'index.html' //根据template.html这个模板来生成(这个文件程序员自己书写)
        })
    ]
}