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
import NavigatorContainer from './NavigatorContainer'
import EditorContainer from './EditorContainer'
import { saveSourceCodeChanges } from './SourceCodeEditorContainerActions'


const Iframe = createReactClass({     
    render: function() {
        return(         
            <iframe src={this.props.src} 
                height={this.props.height} 
                width={this.props.width}
                frameBorder={0} />   
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
        saveSourceCodeChangesAction: PropTypes.func
    }

    static defaultProps = {
        title: 'Reactjs Designer',
        editing: false
    }

    handleResize = () => {
        this.setState({ 
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight 
        })
    }

    handleMessage = (e) => {
        // TODO: dispatch message to specific handlers
    }

    handleKeyDown = (event) => {
        const keyName = event.key
        if(keyName === 'Control'){
            return;
        }
        if(event.metaKey){
            switch(keyName){
                case 'a':
                case 's':
                {
                    // turn off anoying Chrome "Save to file" popup window
                    event.preventDefault()
                    return
                }
                case 'd':
                {
                    // turn off Chrome bookmark popup window
                    event.preventDefault()
                    return;
                }
                default:
                    return
            }
        }
    }

    handleKeyUp = (event) => {
        const keyName = event.key;

        // As the user release the Ctrl key, the key is no longer active.
        // So event.ctrlKey is false.
        if (keyName === 'Control') {
            // console.log('Control key was released');
        }else{
            // console.log(`${keyName} key was released`);
        }

    }

    componentDidMount(){
        window.addEventListener('resize', _.debounce(this.handleResize, 50))
        window.addEventListener('message', this.handleMessage)
        window.addEventListener('keydown', this.handleKeyDown)
        window.addEventListener('keyup', this.handleKeyUp)
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('mousewheel', this.handleMouseWheel)
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize)
        window.removeEventListener('message', this.handleMessage)
        window.removeEventListener('keydown', this.handleKeyDown)
        window.removeEventListener('keyup', this.handleKeyUp)
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('mousewheel', this.handleMouseWheel)
    }

    render(){
        const {
            windowWidth,
            windowHeight
        } = this.state

        const defaultNaviWidth = 280
        const defaultSourceEditorWidth = windowWidth - 280
        return (
            <div>
                <MainContainer widthWidth={windowWidth} windowHeight={windowHeight}>
                    <Iframe src="/client" width={"100%"} height={"100%"} /> 
                </MainContainer>
                <EditorContainer>
                    <NavigatorContainer width={defaultNaviWidth} />
                    <SourceCodeEditorContainer width={defaultSourceEditorWidth}
                        editing={this.props.editing} height={windowHeight}/>
                </EditorContainer>
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

const mapDispatchToProps = (dispatch) => {
    return {
        saveSourceCodeChangesAction: () => dispatch(saveSourceCodeChanges()),
    }
}

const StatefulRootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainer)

export default StatefulRootContainer