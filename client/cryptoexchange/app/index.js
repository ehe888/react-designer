// index.js
import 'regenerator-runtime/runtime'
import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import RootContainer from './RootContainer' // Use webpack module resolver to support relative path search
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import createSagaMiddleware from 'redux-saga'
import {addFormSubmitSagaTo} from 'redux-form-submit-saga';
import { Provider } from 'react-redux'
import mySaga from './sagas'
import reducers from './reducers'
import socketCluster  from 'socketcluster-client'
import { tickerUpdate } from './actions'
import Fingerprint2 from 'fingerprintjs2'


// require('normalize.css')
require('purecss')
require('./assets/css/global.css')


const rootReducer = combineReducers({
    app: reducers,
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, 
        window.parent.__REDUX_DEVTOOLS_EXTENSION__ && window.parent.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(sagaMiddleware))

const rootSaga = addFormSubmitSagaTo(mySaga);
sagaMiddleware.run(rootSaga)

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
}

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )

    //Listen to ws sockert for tikers
    const socket = socketCluster.connect({
        port: 80,
        hostname: 'ws.hedingwen.com',
        secure: false,
        rejectUnauthorized: false // Only necessary during debug if using a self-signed certificate
    });
    socket.on('connect', function () {
        console.log('WSS CONNECTED');

        var tickerChannel = socket.subscribe('ticker');

        tickerChannel.on('subscribeFail', function (err) {
            console.log('Failed to subscribe to the sample channel due to error: ' + err);
        });

        tickerChannel.watch(function (message) {
            store.dispatch(tickerUpdate(message))
        });
    });

    socket.on('error', function(){
        console.log(arguments);
    })
}
const fp = new Fingerprint2(); 
fp.get((result, components) => {
    console.log(result); //a hash, representing your device fingerprint

    // TODO: Compare finger print with server side stored value to detect user agent change

    render(RootContainer)
    
    if(module.hot){
        module.hot.accept('./RootContainer', () => {
        render(RootContainer);
        })
    }
})

// window.onload = function() {
//     setTimeout(
//         () => {
//             render(RootContainer)
//             if(module.hot){
//                 module.hot.accept('./RootContainer', () => {
//                 render(RootContainer);
//                 })
//             }
//         }, 250)
// }

