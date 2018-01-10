// HelloComponent.js
import React from 'react'

export default class HelloComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>{"Say hello from external lib!"}</h2>
            </div>
        )
    }
}