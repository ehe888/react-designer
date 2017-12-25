
import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import RootContainer from './designer/RootContainer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import designerReducers from './designer/reducers' 

require('normalize.css')
require('./assets/css/global.css')

let store = createStore(designerReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    );
}

render(RootContainer)

if(module.hot){
    module.hot.accept('./designer/RootContainer', () => {
       render(RootContainer);
    })
}
