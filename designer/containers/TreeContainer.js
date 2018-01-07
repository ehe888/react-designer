// TreeContainer.js
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { requestTreeNode } from './TreeContainerActions' 
import { openFileInSourceEditor, loadSource } from './SourceCodeEditorContainerActions'
import styles from './TreeContainerStyles'
import TreeNodeComponent from '../components/dumb-tree'

class TreeContainer extends React.Component {
    static propTypes = {
        requestTreeNodeAction: PropTypes.func,
        nodeData: PropTypes.object,
        openFileInSourceEditorAction: PropTypes.func
    }

    expandOrCollapseCallback = (e, path, expand) => {
        // console.log("expand: ", path)
        if(expand){
            this.props.requestTreeNodeAction(path)
        }
    }

    nodeClickCallback = (data) => {
        if(data && data.isLeaf){
            this.props.openFileInSourceEditorAction(data.id)
        }
    }

    componentDidMount(){
        this.props.requestTreeNodeAction("/")
    }

    render(){
        const {
            nodeData
        } = this.props
        return (
            <div style={styles.main}>
                <div style={styles.mainHeaderBar}><span>{"Explorer"}</span></div>
                <div style={styles.contentWrapper}>
                    {nodeData && <TreeNodeComponent 
                        id={nodeData.id}
                        expandOrCollapseCallback={this.expandOrCollapseCallback}
                        nodeClickCallback={this.nodeClickCallback}
                        data={nodeData} />}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        nodeData: state.treeContainer && state.treeContainer.data
    }
}


const mapDispatchToProps = dispatch => {
    return {
        requestTreeNodeAction: (path) => { dispatch(requestTreeNode(path)) },
        openFileInSourceEditorAction: (path) => { 
            dispatch(openFileInSourceEditor(path));
            dispatch(loadSource(path))
        },
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeContainer) 