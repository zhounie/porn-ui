const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
module.exports = merge(common, {
    devtool: 'eval-source-map',
    entry: {
        main: './examples/main',
        vendors: ['vue', 'vue-router']
    },
    output: {
        path: path.join(__dirname, '../examples/dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    devServer: {
        compress: true,
        port: 9000,
        inline: true,
        hot: true,
        open: true,
        historyApiFallback: true
    },
    resolve: {
        alias: {

        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.join(__dirname, '../examples/dist/index.html'),
            template: path.join(__dirname, '../examples/index.html')
        }),
        new FriendlyErrorsPlugin()
    ]
})