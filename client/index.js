
import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import RootContainer from './containers/RootContainer'

require('normalize.css')
require('./assets/css/global.css')


const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
                <Component />
        </AppContainer>,
        document.getElementById('app')
    )
}

render(RootContainer)

if(module.hot){
    module.hot.accept('./containers/RootContainer.js', () => {
       render(RootContainer);
    })
}
