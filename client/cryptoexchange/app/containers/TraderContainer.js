// TraderContainer.js
// TraderContainer is the root container of the trading GUI
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import styles from './TraderContainerStyles'
import NavigatorContainer from './NavigatorContainer'
import CandleStickContainer from './CandleStickContainer'
import AskAndBidContainer from './AskAndBidContainer'


const navigatorWidth = 320
const rightPanelWidth = 320
      
class TraderContainer extends Component {
    static propTypes = {
        boxWidth: PropTypes.number,
        boxHeight: PropTypes.number
    }



    render(){
        const { boxWidth, boxHeight } = this.props

        return (
            <div style={ _.merge({}, styles.main) }>
                <NavigatorContainer boxWidth={navigatorWidth} boxHeight={boxHeight} />
                <div style={{ ...styles.centralContent, 
                        left: `${navigatorWidth}px`,
                        width: `${boxWidth - navigatorWidth - rightPanelWidth }px` }}>
                    <CandleStickContainer />
                </div>
                <div style={{ ...styles.centralContent, 
                        right: `0px`,
                        width: `${rightPanelWidth}px` }} >
                    <AskAndBidContainer boxWidth={rightPanelWidth} boxHeight={boxHeight} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, null)(TraderContainer)