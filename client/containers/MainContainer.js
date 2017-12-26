// MainContainer.js
// MainContainer contains the whole application
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './MainContainerStyles'
import _ from 'lodash'
import HelloWorldComponent from '../components/HelloWorldComponent'


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

    render(){
        return (
            <div style={_.merge({}, styles.main, this.isFullScreenMode() && styles.fullScreen)}>
                <HelloWorldComponent />
            </div>
        )
    }
}

