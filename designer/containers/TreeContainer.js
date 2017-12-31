// TreeContainer.js
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { requestTreeNode } from './TreeContainerActions' 
import styles from './TreeContainerStyles'
import TreeNodeComponent from '../components/dumb-tree'

class TreeContainer extends React.Component {
    static propTypes = {
        requestTreeNodeAction: PropTypes.func,
        nodeData: PropTypes.object
    }

    expandOrCollapseCallback = (e, path, expand) => {
        // console.log("expand: ", path)
        if(expand){
            this.props.requestTreeNodeAction(path)
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
        nodeData: state.treeContainer && state.treeContainer.data
    }
}


const mapDispatchToProps = dispatch => {
    return {
        requestTreeNodeAction: (path) => { dispatch(requestTreeNode(path)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeContainer) 