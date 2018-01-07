// TabHeaderComponent.js

import React from 'react'
import PropTypes from 'prop-types'
import styles from './TabHeaderComponentStyles'
import FontAwesome from 'react-fontawesome'
import TabButtonComponent from './TabButtonComponent'

export default class TabHeaderComponent extends React.Component {
    static propTypes = {
        activeIndex: PropTypes.number.isRequired,
        items: PropTypes.arrayOf(PropTypes.string).isRequired,
        /* Dump component expose callback to smart container, method name ends with Callback */
        tabCloseCallback: PropTypes.func.isRequired,
        tabSelectCallback: PropTypes.func.isRequired,
        minimizeCallback: PropTypes.func.isRequired,
        minimized: PropTypes.bool.isRequired,
        titleRenderer: PropTypes.func
    }

    static defaultProps = {
        activeIndex: 0,
        items: [],
        titleRenderer: (title) => title,
        tabSelectCallback(id, prevId){
            console.log('tab select : ', id, ' prevId: ', prevId)
        },
        tabCloseCallback(index){
            console.log('tab close: ', index)
        },
        minimizeCallback(minimize){
            console.log(`${minimize ? 'minimize' : 'maximize'} window`)
        }
    }

    handleTabButtonClick = (index) => {
        console.log("Button click ", index)
        // set active tab index
        const prevIndex = this.props.activeIndex
        this.props.tabSelectCallback(index, prevIndex)
    } 

    handleMinimize = () => {
        this.props.minimizeCallback(!this.props.minimized)
    }

    

    render() {
        const { activeIndex, items, minimized } = this.props
        const tabItems = items.map((value, index) => {
            return (<TabButtonComponent key={index} id={index} 
                        title={this.props.titleRenderer(value)} 
                        active={index === activeIndex} minimized={minimized}
                        tabButtonClickCallback={this.handleTabButtonClick}
                        tabButtonCloseCallback={this.props.tabCloseCallback}/>)
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