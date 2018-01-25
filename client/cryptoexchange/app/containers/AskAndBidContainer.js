// AskAndBidContainer.js - Show top 50 ask and bit records, live update

import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import styles from './AskAndBidContainerStyles'



export default class AskAndBidContainer extends React.Component {
    state = {
    }

    static propTypes = {
        boxWidth: PropTypes.number,
        boxHeight: PropTypes.number,
    }

    static defaultProps = {
    }

    
    render() {

        const { boxWidth, boxHeight } = this.props
       
        return (
            <div style={_.merge({}, styles.main, { width: `${boxWidth}px`, height: `${boxHeight}px` })}>
                <h1>Bid vs Ask</h1>
            </div>
        )
    }
}