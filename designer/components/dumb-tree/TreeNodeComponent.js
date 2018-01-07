import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import styles from './TreeNodeComponentStyles'

export default class TreeNodeComponent extends React.Component {
    state = {
        collapsed: true,
        onHover: false,
    }
    static propTypes = {
        id: PropTypes.string.isRequired,
        expandOrCollapseCallback: PropTypes.func,
        data: PropTypes.object.isRequired,
        isFetching: PropTypes.bool.isRequired,
        nodeClickCallback: PropTypes.func.isRequired,
    }

    static defaultProps = {
        isFetching: false,
        nodeClickCallback: (data) => {
            console.log(`item ${data} clicked`)
        }
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

    handleMouseOver = () => {
        this.setState((state) => {
            return { ...state, onHover: true }
        })
    }

    handleMouseLeave = () => {
        this.setState((state) => {
            return { ...state, onHover: false }
        })
    }

    handleClick = () => {
        if(this.props.nodeClickCallback){
            this.props.nodeClickCallback(this.props.data)
        }
    }

    render() {
        const {
            collapsed,
            onHover
        } = this.state

        const {
            data
        } = this.props

        const childNodes = (!collapsed && !data.isLeaf && data.children) ? 
                                data.children.map((node) => {
                                    return (<li key={node.id} >
                                                <TreeNodeComponent id={node.id} 
                                                    expandOrCollapseCallback={this.props.expandOrCollapseCallback}
                                                    nodeClickCallback={this.props.nodeClickCallback}
                                                    data={node}
                                                />
                                            </li>)
                                }) : ""
                        
        return (
            <div style={styles.main}>
                <button style={styles.title}
                    onMouseOver={this.handleMouseOver}
                    onMouseLeave={this.handleMouseLeave}>
                    <FontAwesome name={this.getIconName()} 
                        onClick={this.handleExpandOrCollapse}
                        style={styles.treeNodeIndicator} />
                    <FontAwesome name={data.isLeaf ? "file-code-o" : "folder-o" } 
                        onClick={this.handleExpandOrCollapse}
                        style={styles.treeNodeIndicator} />
                    <span style={onHover ? styles.titleOnHover : {} }
                        onClick={this.handleClick}>{data.name}</span>
                </button>
                <ul style={styles.treeChildrenList}>
                    {childNodes}
                </ul>
            </div>
        )
    }
}
