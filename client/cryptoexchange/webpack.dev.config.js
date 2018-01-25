/* webpack.config.js */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const CWD = `${process.cwd()}/client/cryptoexchange`; //Current working dir

module.exports = {
  entry: {
    app: [
      "react-hot-loader/patch",
      "webpack-hot-middleware/client?path=http://localhost:3000/client/__webpack_hmr",
      `${CWD}/app/index.js`
    ],
    vendor: ["lodash", "react", "react-dom"]
  },
  externals: {},
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: ["babel-loader"], exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "file-loader"
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(`${CWD}`),
      path.resolve("./node_modules") // Don't forget to include default node_modules path
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: `${CWD}/dist/client`,
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: false,
      API_URL: JSON.stringify("http://api.hedingwen.com")
    }),
    new CleanWebpackPlugin([`${CWD}/dist/client`]),
    new HtmlWebpackPlugin({
      title: "CryptoEx",
      template: `!!ejs-loader!${__dirname}/index.template.ejs`,
      inject: "body",
      appMountId: "app",
      meta: [
        {
          name: "description",
          content: "Crypto Exchange"
        }
      ],
      mobile: true,
      lang: "zh-CN",
    }),

    new webpack.HotModuleReplacementPlugin(),

    // Uglify JS only for prodution build
    // new UglifyJSPlugin(),

    // Make module Is a hashed value not incremental integer, prevent recompile due to module id change
    // every time a new js file added could lead to module id incremental if Id is number
    new webpack.HashedModuleIdsPlugin(),
    // vendor must be included prior to runtime
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "runtime"
    })
  ],
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, `${CWD}/dist/client`),
    publicPath: "/client/" // DON'T FORGET the ending slash
  }
};
