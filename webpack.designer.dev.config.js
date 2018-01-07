/* webpack.config.js */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const DESIGNER_PATH = "designer"

module.exports = {
    entry: {
        app: [ 'react-hot-loader/patch', `webpack-hot-middleware/client?path=http://localhost:3000/${DESIGNER_PATH}/__webpack_hmr`, `./${DESIGNER_PATH}/index.js` ],
        vendor: [ 'lodash', 'react', 'react-dom'],
    },
    externals: {
        'codemirror': 'CodeMirror',
    },
    // Try to hack ESLint for browser
    // node: {
    //     fs: 'empty',
    //     module: "empty"
    // },
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
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: `./dist/${DESIGNER_PATH}`,
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin([`dist/${DESIGNER_PATH}`]),
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
                'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.30.0/codemirror.min.css',
                'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.33.0/theme/midnight.min.css',
                'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.33.0/addon/lint/lint.min.css',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
            ],
            scripts: [
                'https://cdnjs.cloudflare.com/ajax/libs/jshint/2.9.5/jshint.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.33.0/codemirror.js',
                'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.33.0/addon/lint/lint.js',
                'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.30.0/mode/javascript/javascript.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.33.0/mode/xml/xml.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.33.0/mode/jsx/jsx.min.js',
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
        path: path.resolve(__dirname, `dist/${DESIGNER_PATH}`),
        publicPath: `/${DESIGNER_PATH}/`, // DON'T FORGET the ending slash
    },
};

