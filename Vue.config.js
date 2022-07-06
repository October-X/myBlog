//vue-cli的配置文件


module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target: 'http://test.my-site.com',
            }
        }
    },
    // publicPath:'./',
    
    configureWebpack: require("./webpack.config"),
    // configureWebpack: {
    //     plugins:[new BundleAnalyzerPlugin()],
    // },
}