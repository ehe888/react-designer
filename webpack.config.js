/* webpack.config.js */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        app: [ 'react-hot-loader/patch', 'webpack-hot-middleware/client', './client/index.js' ],
        vendor: [ 'lodash', 'react', 'react-dom']
    },
    externals: {
        'codemirror': 'CodeMirror'
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: ['babel-loader'], exclude: /node_modules/ },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    },
    devtool: 'eval',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            inject: false,
            appMountId: 'app',
            template: require('html-webpack-template'),
            meta: [
                {
                    name: 'description',
                    content: 'Use html-webpack-template for better templating'
                }
            ],
            mobile: true,
            lang: 'zh-CN',
            links: [
                'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.30.0/codemirror.min.css'
            ],
            scripts: [
                'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.33.0/codemirror.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.30.0/mode/javascript/javascript.min.js',
            ]
        }),

        new webpack.HotModuleReplacementPlugin(),

        // Uglify JS only for prodution build
        // new UglifyJSPlugin(),

        // Make module Is a hashed value not incremental integer, prevent recompile due to module id change
        // every time a new js file added could lead to module id incremental if Id is number
        new webpack.HashedModuleIdsPlugin(),
        // vendor must be included prior to runtime
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        })
    ],
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
};

