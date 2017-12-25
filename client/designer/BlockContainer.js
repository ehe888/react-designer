// BlockContainer.js
// BlockContainer the the wrapper around real component
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'
import styles from './BlockContainerStyles'



class BlockContainer extends Component {
    state = { 
        isHover: false
    }

    static propTypes = {
        editing: PropTypes.bool.isRequired,
        // Only a single child can ben passed to this block
        children: PropTypes.element, 
    }

    // Mark: custome methods
    getStylesOfMask = () => {
        return _.merge({}, styles.highlightMask, this.state.isHover && styles.highlightMaskOnHover)
    }

    handleMouseOver = (e) => {
        e.stopPropagation()
        this.setState({ isHover: true })
    }
    handleMouseLeave = () => {
        this.setState({ isHover: false })
    }

    render(){
        const { editing } = this.props
        const {
            isHover
        } = this.state

        return (
            <div style={styles.main}>
                {this.props.children}
                <div style={_.merge({}, styles.highlightMask, !editing && styles.highlightMaskDisabled,
                        editing && isHover && styles.highlightMaskOnHover)}
                    onMouseOver={this.handleMouseOver} 
                    onMouseLeave={this.handleMouseLeave}>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        editing: state.root.editing
    }
}

export default connect(mapStateToProps, null)(BlockContainer)