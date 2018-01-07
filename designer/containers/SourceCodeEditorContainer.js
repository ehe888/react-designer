// SourceCodeEditorContainer.js

import React from 'react'
import PropTypes from 'prop-types'
import CodeMirror from 'react-codemirror'
import _ from 'lodash'
import { connect } from 'react-redux'
import styles from './SourceCodeEditorContainerStyles'
import TabHeaderComponent from '../components/dumb-tab'
import { 
    closeSourceEditor, 
    switchSourceEditor, 
    saveSourceCodeChanges,
    requestToSaveSourceCodeChanges } from './SourceCodeEditorContainerActions'

// TODO: Move config contants into separate config.js file
// const SourceCodeEditorSavingInterval = 2000 //Save content delayed 3000ms of any change
const SourceCodeEditorTabHeight = 24
class SourceCodeEditorContainer extends React.Component {
    state = {
        minimized: false,
    }

    static propTypes = {
        options: PropTypes.object,
        width: PropTypes.number,
        height: PropTypes.number,
        editing: PropTypes.bool.isRequired,
        theme: PropTypes.string.isRequired,
        openItems: PropTypes.array.isRequired,
        sourceCode: PropTypes.object.isRequired,
        activeIndex: PropTypes.number.isRequired,
        closeSourceEditorAction: PropTypes.func,
        switchSourceEditorAction: PropTypes.func,
        saveSourceCodeChangesAction: PropTypes.func,
        requestToSaveSourceCodeChangesAction: PropTypes.func,
        syncing: PropTypes.array
    }

    static defaultProps = {
        options: { },
        width: 640,
        height: 480,
        theme: 'midnight',
        openItems: [ 'Untitled-1' ],
        syncing: [],
        activeIndex: 0,
        sourceCode: {
            'Untitled-1': '// Code'
        }
    }

    componentDidMount(){
        const { width, 
            height } = this.props;
        if(this.codeMirror){
            this.codeMirror.setSize(width, height-SourceCodeEditorTabHeight);
            this.codeMirror.setOption("extraKeys", {
                Tab: function(cm) {
                  var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
                  cm.replaceSelection(spaces);
                }
              })
        }
    }

    refToCodeMirror = (ref) => {
        if(ref) this.codeMirror = ref.getCodeMirror()
    }

    tabSelectCallback = (index) => {
        // Switch tab
        this.props.switchSourceEditorAction(index)
    }

    tabCloseCallback = (index) => {
        if(index >=0 && index < this.props.openItems.length){
            this.props.closeSourceEditorAction(index)
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

    handleKeyDown = (event) => {
        const { openItems, activeIndex, syncing } = this.props
        const keyName = event.key
        if(keyName === 'Control'){
            return;
        }
        if(event.ctrlKey || event.metaKey){
            switch(keyName){
                case 's':
                {
                    // turn off anoying Chrome "Save to file" popup window
                    event.preventDefault()
                    const path = openItems[activeIndex]
                    if( syncing.indexOf(path) < 0 ){
                        this.props.saveSourceCodeChangesAction(path)
                    }   
                    return
                }
                default:
                    return
            }
            
        }
    }

    componentDidUpdate(prevProps) {
        window.addEventListener('keydown', this.handleKeyDown)

        const { width, height, openItems, activeIndex, sourceCode, syncing } = this.props
        if(this.codeMirror){
            this.codeMirror.setSize(width, height-SourceCodeEditorTabHeight);
            //this.codeMirror.setValue(`${sourceCode[openItems[activeIndex]]}`)
            const doc = sourceCode[openItems[activeIndex]]
            if(doc && doc !== this.codeMirror.getDoc()){
                this.codeMirror.swapDoc(doc)
            }
        }

        const toSync = _.difference(syncing, prevProps.syncing)
        if(!_.isEmpty(toSync)){
            toSync.map((value) => {
                this.props.requestToSaveSourceCodeChangesAction(value, sourceCode[value].getValue())
            })
        }
        
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    render() {
        const { theme, width, height, openItems, activeIndex } = this.props
        const { minimized } = this.state
        const options = {
            lineNumbers: true,
            mode: "jsx",
            theme: theme,
            gutters: ["CodeMirror-lint-markers"],
            lint: true
        };
        const containerHeight = minimized ? SourceCodeEditorTabHeight : height
        const containerWidth = minimized ? 64 : width
        
        

        return (
            <div style={ _.merge({}, styles.main, { width: `${containerWidth}px`, height: `${containerHeight}px` }) }>
                <TabHeaderComponent 
                    tabSelectCallback={this.tabSelectCallback}
                    minimizeCallback={this.minimizeCallback}
                    tabCloseCallback={this.tabCloseCallback}
                    minimized={minimized}
                    activeIndex={activeIndex}
                    titleRenderer={ (title) =>  title.substring(title.lastIndexOf('/')+1) }
                    items={openItems} />
                { openItems.length > 0 && openItems[activeIndex] &&
                    <CodeMirror ref={this.refToCodeMirror} 
                        options={{...options, ...this.props.options}} />
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        openItems: state.sourceCodeEditor ? state.sourceCodeEditor.openItems : [ 'Untitled-1' ],
        activeIndex: state.sourceCodeEditor ? state.sourceCodeEditor.activeIndex : 0,
        sourceCode: state.sourceCodeEditor ? state.sourceCodeEditor.sourceCode : { 'Untitled-1': window.CodeMirror.Doc(' // Code') },
        syncing: state.sourceCodeEditor ? state.sourceCodeEditor.syncing : [],    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeSourceEditorAction: (index) => dispatch(closeSourceEditor(index)),
        switchSourceEditorAction: (index) => dispatch(switchSourceEditor(index)),
        saveSourceCodeChangesAction: (path) => dispatch(saveSourceCodeChanges(path)),
        requestToSaveSourceCodeChangesAction: (path, code) => 
                            dispatch(requestToSaveSourceCodeChanges(path, code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SourceCodeEditorContainer)
