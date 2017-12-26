// RootContainer.js 
// RootContainer wrap EditorLayer and AppLayer in development mode
// RootContainter is Fix Height and Fix Width absolute positioned full screen containter
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import createReactClass from 'create-react-class'
import { connect } from 'react-redux'
import SourceCodeEditorContainer from './SourceCodeEditorContainer'
import EditorToggleButton from './EditorToggleButton'
import MainContainer from './MainContainer'

const Iframe = createReactClass({     
    render: function() {
        return(         
        <div>          
            <iframe src={this.props.src} 
                height={this.props.height} 
                width={this.props.width}
                frameBorder={0}/>         
        </div>
        )
    }
});

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

    handleMessage = (e) => {
        console.log(e)
    }

    componentDidMount(){
        window.addEventListener('resize', _.debounce(this.handleResize, 50))
        window.addEventListener('message', this.handleMessage)
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize)
        window.removeEventListener('message', this.handleMessage)
    }

    render(){
        const {
            windowWidth,
            windowHeight
        } = this.state

        return (
            <div>
                <MainContainer widthWidth={windowWidth} windowHeight={windowHeight}>
                    <Iframe src="/client" width={"100%"} height={"100%"} /> 
                </MainContainer>
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