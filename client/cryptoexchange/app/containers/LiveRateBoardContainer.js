// LiveRateBoardContainer

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'redux'

class LiveRateBoardContainer extends React.Component {
    static propTypes = {
    }

    static defaultProps = {
    }

    render() {
        return (
            <div>
                实时行情
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        authenticated: !!(state.app && state.app.account && state.app.account.authenticated)
    }
}

export default connect(mapStateToProps, null)(LiveRateBoardContainer)
