// EditorToggleButton.js
// Toggle between Editor and Preview mode by setting RootContainer state {editing} to true or false
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './EditorToggleButtonStyles'
import { toggleEditing } from './EditorToggleButtonActions'

class EditorToggleButton extends Component {
    static propTypes = {
        editing: PropTypes.bool.isRequired,
        toggleEditingAction: PropTypes.func.isRequired
    }

    handleClick = () => {
        this.props.toggleEditingAction()
    }

    render() {
        const {
            editing
        } = this.props
        return (
            <button style={styles.main} onClick={this.handleClick}>
                { editing ? "Preview" : "Edit" }
            </button>
        )
    }
}

const mapStateToProps = state => {
    return {
        editing: state.rootContainer.editing
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleEditingAction: () => { dispatch(toggleEditing()) }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(EditorToggleButton)