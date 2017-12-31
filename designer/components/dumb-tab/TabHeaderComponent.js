// TabHeaderComponent.js

import React from 'react'
import PropTypes from 'prop-types'
import styles from './TabHeaderComponentStyles'
import FontAwesome from 'react-fontawesome'
import TabButtonComponent from './TabButtonComponent'

export default class TabHeaderComponent extends React.Component {
    static propTypes = {
        activeId: PropTypes.number.isRequired,
        items: PropTypes.array.isRequired,
        /* Dump component expose callback to smart container, method name ends with Callback */
        tabCloseCallback: PropTypes.func.isRequired,
        tabSelectCallback: PropTypes.func.isRequired,
        minimizeCallback: PropTypes.func.isRequired,
        minimized: PropTypes.bool.isRequired,
    }

    static defaultProps = {
        activeId: 0,
        items: [],
        tabSelectCallback(id, prevId){
            console.log('tab select : ', id, ' prevId: ', prevId)
        },
        tabCloseCallback(id){
            console.log('tab close: ', id)
        },
        minimizeCallback(minimize){
            console.log(`${minimize ? 'minimize' : 'maximize'} window`)
        }
    }

    handleTabButtonClick = (e, id) => {
        // set active tab index
        const prevId = this.props.activeId
        this.props.tabSelectCallback(id, prevId)
    } 

    handleMinimize = () => {
        this.props.minimizeCallback(!this.props.minimized)
    }

    render() {
        const { activeId, items, minimized } = this.props
        const tabItems = items.map((file, index) => {
            return (<TabButtonComponent key={index} id={index} title={file.name} 
                        active={index === activeId} minimized={minimized}
                        handleTabButtonClick={this.handleTabButtonClick}/>)
        })
        return (
            <div style={styles.tab}>
                {tabItems}
                <div style={styles.tabTools} >
                    <span>
                        <a onClick={this.handleMinimize}>
                            <FontAwesome name={minimized ? "window-maximize" : "window-minimize"} 
                            style={{ color: 'white', marginRight: '3px' }}/>
                        </a>
                        <FontAwesome name="window-close-o" style={{ color: 'white' }}/>
                    </span>
                </div>
            </div>
        )
    }
}