/* host.js */

const express = require("express")
const webpack = require("webpack")
const webpackDevMiddleware = require("webpack-dev-middleware")

const designerApp = require('./designer/app')
const clientApp = express()
const webpackConfig = require("../webpack.config.js")
const compiler = webpack(webpackConfig)

clientApp.use(webpackDevMiddleware(compiler, {
    publicPath: "/",//webpackConfig.output.publicPath,
    hot: true,
    contentBase: "./dist"
}))

clientApp.use(require("webpack-hot-middleware")(compiler))

const rootApp = express()

rootApp.use('/designer', designerApp)
rootApp.use("/client", clientApp)
// rootApp.use("/", (req, res) => {

// })

rootApp.listen(3000, function(){
    console.log("React Designer app listen on port 3000!\n")
})


