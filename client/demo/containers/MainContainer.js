// MainContainer.js
// MainContainer contains the whole application
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './MainContainerStyles'
import _ from 'lodash'
import HelloWorldComponent from '../components/HelloWorldComponent'
import HelloComponent from 'lib/hello/HelloComponent'

require('../assets/css/global.css')

export const LAYOUT_MODE_FULLSCREEN = 'fullScreen'
export const LAYOUT_MODE_DEFAULT = 'default'

export default class MainContainer extends Component {
    static propTypes = {
        windowWidth: PropTypes.number,
        windowHeight: PropTypes.number,
        // UI layout mode:
        // fullScreen - rendered at window size, overflow hidden, suitable for SPA dashboard
        // default - default div render, auto expand or shrink based on the content size
        layoutMode: PropTypes.oneOf([LAYOUT_MODE_FULLSCREEN, LAYOUT_MODE_DEFAULT]),
    }

    static defaultProps = {
        layoutMode: LAYOUT_MODE_FULLSCREEN
    }
    
    // Mark: custom methods
    isFullScreenMode = () => {
        return this.props.layoutMode === LAYOUT_MODE_FULLSCREEN
    }

    handleMouseOver = (e) => {
        e.stopPropagation()
        const comp = window.FindReact(e.target)
        console.log(comp)
        window.parent.postMessage(`${comp._reactInternalInstance._currentElement.type.name} on hover`, "*")    //TODO: change targetOrigin form * to the same origin
    }
    handleMouseLeave = (e) => {
        
    }

    render(){
        return (
            <div style={_.merge({}, styles.main, this.isFullScreenMode() && styles.fullScreen )}
                onMouseOver={this.handleMouseOver} 
                onMouseLeave={this.handleMouseLeave}>
              <div style={{ position: 'relative', overflow: 'auto' }} >
                <HelloWorldComponent />
                <HelloWorldComponent />
                <HelloWorldComponent />
                <HelloWorldComponent />
                <HelloWorldComponent />
                <HelloWorldComponent />
                <HelloComponent />
              </div>
            </div>
        )
    }
}

