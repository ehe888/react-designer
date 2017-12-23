// editable.js
// High Order Component decorator to make a Component editable in editing mode
import React, { Component } from 'react'

export function editable(WrappedComponent) {
    return class EditableComponent extends Component {
        state = {
            isHover: false,
            isSelected: false,
        }

        handleMouseOver = (e) => {
            e.stopPropagation()
            this.setState({ isHover: true })
        }
        handleMouseLeave = () => {
            this.setState({ isHover: false })
        }
        handleClick = (e) => {
            e.stopPropagation()
            this.setState({ isSelected: true })
        }

        render(){
            return (
                <WrappedComponent {...this.props} isHover={this.state.isHover}
                    onMouseOver={this.handleMouseOver}
                    onMouseLeave={this.handleMouseLeave} 
                />
            )
        }
    }
}