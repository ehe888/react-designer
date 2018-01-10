// MainContainer.js
// MainContainer contains the whole application
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './MainContainerStyles'
import _ from 'lodash'
import { connect } from 'react-redux'
import LoginContainer from './LoginContainer'
import TraderContainer from './TraderContainer'

export const LAYOUT_MODE_FULLSCREEN = 'fullScreen'
export const LAYOUT_MODE_DEFAULT = 'default'

const HEADER_HEIGHT = 36


class MainContainer extends Component {
    static propTypes = {
        windowWidth: PropTypes.number,
        windowHeight: PropTypes.number,
        // UI layout mode:
        // fullScreen - rendered at window size, overflow hidden, suitable for SPA dashboard
        // default - default div render, auto expand or shrink based on the content size
        layoutMode: PropTypes.oneOf([LAYOUT_MODE_FULLSCREEN, LAYOUT_MODE_DEFAULT]),
        authenticated: PropTypes.bool.isRequired,
        uid: PropTypes.string
    }

    static defaultProps = {
        layoutMode: LAYOUT_MODE_FULLSCREEN,
        authenticated: false,
        uid: null,
    }
    
    // Mark: custom methods
    isFullScreenMode = () => {
        return this.props.layoutMode === LAYOUT_MODE_FULLSCREEN
    }

    handleMouseOver = (e) => {
        e.stopPropagation()
        const comp = window.FindReact(e.target)
        // NOTES: For 3rd party dynamically created non-react component, e.g. reCAPTCHA, 
        // the comp is null, need tor resolve this issue by redesign a pure reCAPTCHA React Component
        if(comp){
            //TODO: change targetOrigin form * to the same origin
            window.parent.postMessage(`${comp._reactInternalInstance._currentElement.type.name} on hover`, "*")    
        }
    }
    handleMouseLeave = (e) => {
        
    }

    render(){
        const { authenticated, windowWidth, windowHeight } = this.props
        
        return (
            <div style={_.merge({}, styles.main, this.isFullScreenMode() && styles.fullScreen )}
                onMouseOver={this.handleMouseOver} 
                onMouseLeave={this.handleMouseLeave}>
                <div className="header">
                    <div style={{ height:`${HEADER_HEIGHT}px` }} 
                        className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                        <a className="pure-menu-heading" 
                            style={{ fontSize: '100%' }}
                            href="">CRYPTO EX</a>

                        { !authenticated &&  
                            <ul className="pure-menu-list">
                                <li className="pure-menu-item pure-menu-selected">
                                    <a href="#"
                                    style={{ fontSize: '80%' }}
                                    className="pure-menu-link">Login</a></li>
                                <li className="pure-menu-item">
                                    <a href="#" 
                                    style={{ fontSize: '80%' }}
                                    className="pure-menu-link">Regiser</a></li>
                            </ul>
                        }
                        {
                            authenticated &&  
                            <ul className="pure-menu-list">
                                <li className="pure-menu-item pure-menu-selected">
                                    <a href="#"
                                    style={{ fontSize: '80%' }}
                                    className="pure-menu-link">U123456</a></li>
                            </ul>
                        }
                    </div>
                </div>
                <div style={{ top: `${HEADER_HEIGHT}px` }} >
                    <TraderContainer 
                        boxWidth={windowWidth} boxHeight={ windowHeight - HEADER_HEIGHT } />
                </div>
                {!authenticated && 
                    <div className="splash-container" style={{ position: 'relative', overflow: 'auto' }} >
                        <div className="splash">
                        <LoginContainer /> 
                        </div>
                    </div>
                }
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        authenticated: !!(state.app && state.app.account && state.app.account.authenticated),
        uid: state.app && state.app.account && state.app.account.uid
    }
}

export default connect(mapStateToProps, null)(MainContainer)

