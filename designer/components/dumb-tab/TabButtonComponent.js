// TabButtonComponent.js

import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import styles from './TabButtonComponentStyles'
import FontAwesome from 'react-fontawesome'

export default class TabButtonComponent extends React.Component {
    state = { 
        isHover: false, // Component internal state
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        handleTabButtonClose: PropTypes.func.isRequired,
        handleTabButtonClick: PropTypes.func.isRequired,
        active: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        minimized: PropTypes.bool.isRequired,
    }

    static defaultProps = {
        title: "  ",
        active: false,
        minimized: false,
        handleTabButtonClick(e){
            console.log('click tab button: ', e)
        },
        handleTabButtonClose(e){
            console.log('click tab close: ', e)
        }
    }

    // Mark: custome methods
    getStyle = () => {
        return _.merge({}, styles.tabButton, 
                this.state.isHover && styles.tabBbuttonOnHover,
                this.props.active && styles.tabButtonOnActive,
                this.props.minimized && styles.tabButtonMinimized)
    }

    handleMouseOver = (e) => {
        e.stopPropagation()
        this.setState({ isHover: true })
    }
    handleMouseLeave = () => {
        this.setState({ isHover: false })
    }

    handleCloseClick = (e) => {
        this.props.handleTabButtonClose(e)
    }

    handleClick = (e) => {
        this.props.handleTabButtonClick(e, this.props.id)
    }

    render() {
        return (
            <button style={this.getStyle()}
                onClick={this.handleClick}
                onMouseOver={this.handleMouseOver} 
                onMouseLeave={this.handleMouseLeave}>
                {this.props.title + "  "}
                <span onClick={this.handleCloseClick}>
                    <FontAwesome name='close'/>
                </span>
            </button>
        )
    }
}