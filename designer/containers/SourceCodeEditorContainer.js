/* code_editor/index.js */

import React from 'react'
import PropTypes from 'prop-types'
import CodeMirror from 'react-codemirror'
import _ from 'lodash'
import { connect } from 'react-redux'
import styles from './SourceCodeEditorContainerStyles'
import FontAwesome from 'react-fontawesome'

class TabButton extends React.Component {
    state = { 
        isHover: false
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        handleTabButtonClose: PropTypes.func.isRequired,
        handleTabButtonClick: PropTypes.func.isRequired,
        active: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }

    static defaultProps = {
        title: "  ",
        active: false,
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
                this.props.active && styles.tabButtonOnActive)
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

const demoFiles = [{
                    name: 'Untitled-1',
                    path: '',
                    code: `// Source Code`
                }]

class TabHeaderComponent extends React.Component {
    state = {
        activeId: 0
    }

    static propTypes = {
        items: PropTypes.array.isRequired,
        /* Dump component expose callback to smart container, method name ends with Callback */
        tabCloseCallback: PropTypes.func.isRequired,
        tabSelectCallback: PropTypes.func.isRequired,
    }

    static defaultProps = {
        items: demoFiles,
        tabSelectCallback(id, prevId){
            console.log('tab select : ', id, ' prevId: ', prevId)
        },
        tabCloseCallback(id){
            console.log('tab close: ', id)
        }
    }

    handleTabButtonClick = (e, id) => {
        // set active tab index
        const prevId = this.state.activeId
        this.setState({ activeId: id })
        this.props.tabSelectCallback(id, prevId)
    } 

    render() {
        const { activeId } = this.state
        const { items } = this.props
        const tabItems = items.map((file, index) => {
            return (<TabButton key={index} id={index} title={file.name} 
                        active={index === activeId}
                        handleTabButtonClick={this.handleTabButtonClick}/>)
        })
        return (
            <div style={styles.tab}>
                {tabItems}
            </div>
        )
    }
}

const SourceCodeEditorTabHeight = 25
class SourceCodeEditorContainer extends React.Component {

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

    constructor() {
        super();
        this.state = {
          code: "// Source code"
        };
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
        //show source code of active file, do some cleanup if necessary to prev selected file
        if(this.codeMirror){
            this.codeMirror.setValue(demoFiles[id].code)
        }
    }

    render() {
        const { theme, width, height } = this.props
        const options = {
            lineNumbers: true,
            mode: "javascript",
            theme: theme
        };

        if(this.codeMirror){
            this.codeMirror.setSize(width, height-SourceCodeEditorTabHeight);
        }

        return (
            <div style={ _.merge({ width: `${width}px`, height: `${height}px` }, 
                            styles.main) }>
                <TabHeaderComponent tabSelectCallback={this.tabSelectCallback}/>
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
