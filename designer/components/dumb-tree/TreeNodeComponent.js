import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import styles from './TreeNodeComponentStyles'

export default class TreeNodeComponent extends React.Component {
    state = {
        collapsed: true,
    }
    static propTypes = {
        id: PropTypes.string.isRequired,
        expandOrCollapseCallback: PropTypes.func,
        data: PropTypes.object.isRequired,
        isFetching: PropTypes.bool.isRequired,
    }

    static defaultProps = {
        isFetching: false
    }

    handleExpandOrCollapse = (e) => {
        const { data } = this.props
        if(!data.isLeaf){
            const toExpand = this.state.collapsed
            this.setState({ collapsed: !this.state.collapsed })
            if(this.props.expandOrCollapseCallback){
                this.props.expandOrCollapseCallback(e, this.props.id, toExpand)
            }
        }
        
    }

    getIconName = () => {
        if(this.props.data.isLeaf){
            return ""
        }else{
            return this.state.collapsed ? "angle-right" : "angle-down"
        }
    }

    render() {
        const {
            collapsed
        } = this.state

        const {
            data
        } = this.props

        const childNodes = (!collapsed && !data.isLeaf && data.children) ? data.children.map((node) => {
                                                return (<li key={node.id} >
                                                            <TreeNodeComponent id={node.id} 
                                                                expandOrCollapseCallback={this.props.expandOrCollapseCallback}
                                                                data={node}
                                                            />
                                                        </li>)
                                            }) : ""
                        
        return (
            <div style={styles.main}>
                <button style={styles.title}>
                    <FontAwesome name={this.getIconName()} 
                        onClick={this.handleExpandOrCollapse}
                        style={styles.treeNodeIndicator} />
                    <FontAwesome name={data.isLeaf ? "file-code-o" : "folder-o" } 
                        onClick={this.handleExpandOrCollapse}
                        style={styles.treeNodeIndicator} />
                    {data.name}
                </button>
                <ul style={styles.treeChildrenList}>
                    {childNodes}
                </ul>
            </div>
        )
    }
}
