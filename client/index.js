
import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import RootContainer from './containers/RootContainer'

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
    module.hot.accept('./containers/RootContainer', () => {
       render(RootContainer);
    })
}
