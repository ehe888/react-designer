// NavigatorContainer.js

import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import styles from './NavigatorContainerStyles'

class NavigatorItem extends React.Component {
    state = { 
        isHover: false
    }

    static propTypes = {
        icon: PropTypes.string.isRequired,
        isActive: PropTypes.bool.isRequired,
        clickCallback: PropTypes.func.isRequired,
        id: PropTypes.number.isRequired,
    }

    static defaultProps = {
        icon: 'bars',
        isActive: false,
        clickCallback: (id) => {
            console.log(`navigator item [${id}] clicked!`)
        }
    }

    handleMouseOver = (e) => {
        e.stopPropagation()
        this.setState({ isHover: true })
    }
    handleMouseLeave = () => {
        this.setState({ isHover: false })
    }
    handleClick = () => {
        if(!this.props.isActive){
            this.props.clickCallback(this.props.id)
        }
    }
    render() {
        const {
            icon,
            isActive
        } = this.props

        const {
            isHover
        } = this.state

        return (
            <li><a style={_.merge({}, styles.naviListItemLink)}
                onMouseOver={this.handleMouseOver}
                onMouseLeave={this.handleMouseLeave}
                >
                <FontAwesome name={icon}
                    onClick={this.handleClick}
                    style={_.merge({}, 
                        styles.naviListItemLinkContent, 
                        isActive && styles.naviListItemLinkContentActive,
                        isHover && styles.naviListItemLinkContentOnHover)}/>
                </a>
            </li>
        )
    }
}

const naviItems = [
    {
        name: 'files',
        icon: 'files-o',
        link: ''
    },
    {
        name: 'dependencies',
        icon: 'cogs',
        link: ''
    },
    {
        name: 'server',
        icon: 'server',
        link: ''
    }
]

export default class NavigatorContainer extends React.Component {
    state = {
        activeItemIndex: 0
    }

    itemClickCallback = (id) => {
        this.setState({ activeItemIndex: id })
    }
    
    render() {
        const { activeItemIndex } = this.state

        const items = naviItems.map((item, index) => {
            return <NavigatorItem key={item.name} 
                        id={index} icon={item.icon}
                        isActive={ activeItemIndex === index }
                        clickCallback={this.itemClickCallback} />
        })

        return (
            <div style={styles.main}>
                <ul style={styles.naviList}>
                    {items}
                </ul>
            </div>
        )
    }
}