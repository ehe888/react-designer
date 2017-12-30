// TreeContainer.js
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadTreeNode } from './TreeContainerActions' 
import styles from './TreeContainerStyles'
import TreeNodeComponent from '../components/treeNode'

class TreeContainer extends React.Component {
    static propTypes = {
        loadTreeNodeAction: PropTypes.func,
        nodeData: PropTypes.object
    }

    expandOrCollapseCallback = (e, path, expand) => {
        // console.log("expand: ", path)
        if(expand){
            this.props.loadTreeNodeAction(path)
        }
    }

    componentDidMount(){
        this.props.loadTreeNodeAction("/")
    }

    render(){
        const {
            nodeData
        } = this.props
        return (
            <div style={styles.main}>
                <div style={styles.mainHeaderBar}><span>{"Explorer"}</span></div>
                {nodeData && <TreeNodeComponent 
                    id={nodeData.id}
                    expandOrCollapseCallback={this.expandOrCollapseCallback}
                    data={nodeData} />}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        nodeData: state.treeContainer ? state.treeContainer.nodeData : null
    }
}


const mapDispatchToProps = dispatch => {
    return {
        loadTreeNodeAction: (path) => { dispatch(loadTreeNode(path)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeContainer) 