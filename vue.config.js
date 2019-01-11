const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    productionSourceMap: false,
    devServer: {
        open: true
    },
    configureWebpack: config => {
        if(process.env.NODE_ENV === 'production'){
            return {
                plugins: [
                    new CompressionPlugin({
                        test: /\.js$|\.html$|\.css$/,
                        threshold: 10240,
                        deleteOriginalAssets: false
                    })
                ]
            }
        }
    }
}

// nginx