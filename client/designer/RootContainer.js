// RootContainer.js 
// RootContainer wrap EditorLayer and AppLayer in development mode
// RootContainter is Fix Height and Fix Width absolute positioned full screen containter
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'
import MainContainer from './MainContainer'
import SourceCodeEditorContainer from './SourceCodeEditorContainer'
import EditorToggleButton from './EditorToggleButton'

class RootContainer extends Component {
    state = { 
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
    }

    // Declare propTypes as static properties as early as possible
    static propTypes = {
        title: PropTypes.string,
        editing: PropTypes.bool.isRequired,
    }

    static defaultProps = {
        title: 'Reactjs Designer',
        editing: true
    }

    handleResize = () => {
        this.setState({ 
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight 
        })
    }

    componentDidMount(){
        window.addEventListener('resize', _.debounce(this.handleResize, 50))
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize)
    }

    render(){
        const {
            windowWidth,
            windowHeight
        } = this.state

        return (
            <div>
                <MainContainer windowWidth={windowWidth} windowHeight={windowHeight} />
                <SourceCodeEditorContainer
                    editing={this.props.editing} height={windowHeight}/>
                <EditorToggleButton />
            </div>
        )

    }   
}

const mapStateToProps = state => {
    return {
        editing: state.root.editing
    }
}

const StatefulRootContainer = connect(mapStateToProps)(RootContainer)

export default StatefulRootContainer