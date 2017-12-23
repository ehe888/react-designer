// EditorContainer.js
// EditorContainer is the root container of the editor GUI
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import styles from './EditorContainerStyles'

class EditorContainer extends Component {
    static propTypes = {
        editing: PropTypes.bool.isRequired,
        windowWidth: PropTypes.number,
        windowHeight: PropTypes.number
    }

    render(){
        const { editing } = this.props
        return (
            <div style={ _.merge({}, styles.main, !editing && styles.previewMode) }>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        editing: state.rootContainer.editing
    }
}

export default connect(mapStateToProps, null)(EditorContainer)