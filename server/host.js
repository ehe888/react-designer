/* host.js */

const express = require("express")
const webpack = require("webpack")
const webpackDevMiddleware = require("webpack-dev-middleware")

const api = require('./api/app')
const designerApp = express()
const webpackConfig = require("../webpack.designer.dev.config.js")
const compiler = webpack(webpackConfig)

designerApp.use(webpackDevMiddleware(compiler, {
    publicPath: "/", //default to be webpackConfig.output.publicPath
}))

designerApp.use(require("webpack-hot-middleware")(compiler))

/** Client app config */
const clientApp = express()
const customWebpackConfig = require("../client/cryptoexchange/webpack.dev.config.js")
const customCompiler = webpack(customWebpackConfig)

clientApp.use(webpackDevMiddleware(customCompiler, {
    publicPath: "/",
}))

clientApp.use(require("webpack-hot-middleware")(customCompiler))
/** end of client app config */

const rootApp = express()

rootApp.set('view engine', 'pug')
rootApp.set('views', './server/views')

rootApp.use('/api', api)
rootApp.use("/designer", designerApp)
rootApp.use('/client', clientApp)
rootApp.use("/", (req, res) => {
    res.render('index', { })
})

rootApp.listen(3000, function(){
    console.log("React Designer app listen on port 3000!\n")
})


