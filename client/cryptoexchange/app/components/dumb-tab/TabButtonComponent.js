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
        tabButtonCloseCallback: PropTypes.func.isRequired,
        tabButtonClickCallback: PropTypes.func.isRequired,
        active: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        minimized: PropTypes.bool.isRequired,
    }

    static defaultProps = {
        title: "  ",
        active: false,
        minimized: false,
        tabButtonCloseCallback(index){
            console.log('click tab button: ', index)
        },
        tabButtonClickCallback(index){
            console.log('click tab close: ', index)
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

    handleCloseClick = () => {
        this.props.tabButtonCloseCallback(this.props.id)
    }

    handleClick = () => {
        this.props.tabButtonClickCallback(this.props.id)
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