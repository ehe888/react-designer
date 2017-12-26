
import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import RootContainer from './containers/RootContainer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import designerReducers from './reducers' 

require('normalize.css')
require('./assets/css/global.css')

/**
 * Search a React Component by dom element wrapped
 * @param {Element} dom the DOM Element used to search
 */
window.FindReact = function(dom) {
    for (var key in dom) {
        if (key.startsWith("__reactInternalInstance$")) {
            var compInternals = dom[key]._currentElement;
            var compWrapper = compInternals._owner;
            var comp = compWrapper._instance;
            return comp;
        }
    }
    return null;
};

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
    module.hot.accept('./containers/RootContainer', () => {
       render(RootContainer);
    })
}
