// LoginContainer.js

import React from 'react'
import PropTypes from 'prop-types'
import LoginForm from '../components/LoginForm'
import { connect } from 'react-redux'
import injectSheet from 'react-jss'

// const styles = {
//   loginError: {
//     composes: 'animated shake',
//     color: 'red'
//   }
// }

export default class LoginContainer extends React.Component {
    render() {
        
        return (
          <div>
            <LoginForm />
            {
              <p><a href="#">Register</a></p>
            }
          </div>
        )
    }
}

// const mapStateToProps = (state, prevProps) => {
//   return {
//       error: state.app.account && state.app.account.error 
//   }
// }

// export default connect(mapStateToProps, null)(
//     injectSheet(styles)(LoginContainer)
//   )

