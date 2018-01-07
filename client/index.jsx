
import React from "react"
import ReactDOM from "react-dom"
import socketCluster from 'socketcluster'
import { AppContainer } from "react-hot-loader"
import RootContainer from './RootContainer'

require('normalize.css')


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


const socket = socketCluster.connect({
    hostname: 'localhost',
    port: 8000,
    secure: false,
    rejectUnauthrozied: false
})

socket.on('error', function (err) {
    throw 'Socket error - ' + err
});

socket.on('connect', function () {
    console.log('CONNECTED')

    const sampleChannel = socket.subscribe('sample')
    sampleChannel.on('subscribeFail', function (err) {
        console.log('Failed to subscribe to the sample channel due to error: ' + err)
    })
    sampleChannel.watch(function (num) {
        console.log('Sample channel message:', num)
    });
});

socket.on('rand', function (data) {
    // console.log('RANDOM STREAM: ' + data.rand)
});



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
    module.hot.accept('./RootContainer', () => {
       render(RootContainer);
    })
}
