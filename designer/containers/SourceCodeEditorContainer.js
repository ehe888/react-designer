// SourceCodeEditorContainer.js

import React from 'react'
import PropTypes from 'prop-types'
import CodeMirror from 'react-codemirror'
import _ from 'lodash'
import { connect } from 'react-redux'
import styles from './SourceCodeEditorContainerStyles'
import TabHeaderComponent from '../components/dumb-tab'

const demoFiles = [{
                    name: 'Untitled-1',
                    path: '',
                    code: `// Source Code`
                }]


const SourceCodeEditorTabHeight = 24
class SourceCodeEditorContainer extends React.Component {
    state = {
        code: "// Source code",
        minimized: false,
        activeId: 0,
    }

    static propTypes = {
        options: PropTypes.object,
        width: PropTypes.number,
        height: PropTypes.number,
        editing: PropTypes.bool.isRequired,
        theme: PropTypes.string.isRequired,
        syncing: PropTypes.bool.isRequired,
        sourceFiles: PropTypes.array.isRequired,
    }

    static defaultProps = {
        options: { },
        width: 640,
        height: 480,
        theme: 'midnight',
        syncing: false,
        sourceFiles: demoFiles,
    }

    componentDidMount(){
        const { width, height } = this.props;
        if(this.codeMirror){
            this.codeMirror.setSize(width, height-SourceCodeEditorTabHeight);
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.syncing && this.props.syncing !== prevProps.syncing){
            console.log(this.codeMirror.getValue())
        }
    }

    refToCodeMirror = (ref) => {
        this.codeMirror = ref.getCodeMirror()
    }

    tabSelectCallback = (id, prevId) => {
        if( id !== this.state.activeId ){
            this.setState(() => {
                return { activeId: id }
            })
        }
    }

    minimizeCallback = (minimize) => {
        const { minimized } = this.state
        if(minimized === minimize){
            //Already in the state, ignore this request
            
        }else{
            this.setState((prevState) => {
                return { minimized: !prevState.minimized }
            })
        }
    }

    render() {
        const { theme, width, height, sourceFiles } = this.props
        const { minimized, activeId } = this.state
        const options = {
            lineNumbers: true,
            mode: "javascript",
            theme: theme
        };
        const containerHeight = minimized ? SourceCodeEditorTabHeight : height
        const containerWidth = minimized ? 64 : width
        
        if(this.codeMirror){
            this.codeMirror.setSize(width, height-SourceCodeEditorTabHeight);
            this.codeMirror.setValue(sourceFiles[activeId].code)
        }

        return (
            <div style={ _.merge({}, styles.main, { width: `${containerWidth}px`, height: `${containerHeight}px` }) }>
                <TabHeaderComponent 
                    tabSelectCallback={this.tabSelectCallback}
                    minimizeCallback={this.minimizeCallback}
                    minimized={minimized}
                    items={sourceFiles} />
                { this.props.sourceFiles.length > 0 &&
                    <CodeMirror ref={this.refToCodeMirror} 
                        value={this.state.code} options={{...options, ...this.props.options}} />
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        syncing: state.sourceCodeEditor ? state.sourceCodeEditor.syncing : false
    }
}

export default connect(mapStateToProps, null)(SourceCodeEditorContainer)
