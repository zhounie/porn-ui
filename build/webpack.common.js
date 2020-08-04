const path = require('path')
const webpack = require('webpack')
const pkg = require('../package.json')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


const resolve = (dir) => {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'
                ]
            }, {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }, {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192'
            }, {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue'], // 如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀。
        alias: {
            'vue': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
            'process.env.VERSION': `'${pkg.version}'` // 可在编译时配置的全局常量
        })
    ]
}