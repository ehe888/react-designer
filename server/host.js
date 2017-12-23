/* host.js */

const express = require("express")
const webpack = require("webpack")
const webpackDevMiddleware = require("webpack-dev-middleware")

const designerApp = require('./designer/app')
const app = express()
const webpackConfig = require("../webpack.config.js")
const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    contentBase: "./dist"
}))

app.use(require("webpack-hot-middleware")(compiler))

const rootApp = express()

rootApp.use('/designer', designerApp)
rootApp.use("/", app)

rootApp.listen(3000, function(){
    console.log("React Designer app listen on port 3000!\n")
})


