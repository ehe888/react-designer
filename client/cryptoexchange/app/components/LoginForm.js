// LoginContainer.js
// Use redux-form

import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import ReCAPTCHA from 'react-google-recaptcha' //https://github.com/erikras/redux-form/issues/1880
import styles from './LoginFormStyles'
import _ from 'lodash'
import { onSubmitActions } from 'redux-form-submit-saga'

import injectSheet from 'react-jss'

const jssStyles = {
  loginError: {
    composes: 'animated shake delay-4 fadeOut',
    color: 'red'
  }
}


const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  
  if (!values.password) {
    errors.password = 'Required'
  }
  
  if (!values.reCAPTCHA) {
    errors.reCAPTCHA = 'Required'
  }

  return errors
}

class Captcha extends React.Component {
  static propTypes = {
    input: PropTypes.object
  }

  constructor(props) {
    super(props)
  }

  render(){
    return (<div style={{ display: 'inline-block' }}>
                <ReCAPTCHA
                    sitekey={'6LfZrj8UAAAAAIcDyZG1DCLoTeg8uNz6mBRfHDHi'} /* process.env.RECAPTCHA_SITE_KEY */
                    onChange={this.props.input.onChange}
                    />
            </div>)
  }
}

let LoginForm = props => {
    // handleSubmit is the enhanced function injected by the reduxForm HOC,
    // Don't confuse it with onSumit property of the exported LoginForm HOC
    const { handleSubmit, submitting, submitSucceeded,submitFailed, error, classes } = props  
    const renderMessage = () => {
      if(submitting){
        return (
          <div className="spinner">
              <div className="rect1"></div>
              <div className="rect2"></div>
              <div className="rect3"></div>
              <div className="rect4"></div>
              <div className="rect5"></div>
          </div>
        )
      }else{
        if(submitFailed){
          return (<p className={classes.loginError}>{error}</p>)
        }
      }
      return (<p style={{ color: 'white' }}>Login</p>)
    }

    return (
        <form className="pure-form pure-form-aligned" onSubmit={handleSubmit}>
          {
            renderMessage()
          }
          <fieldset>
            <div className="pure-control-group">
                <Field name="email" component="input" 
                    type="email" placeholder="email" value=""
                    autoComplete="off"
                    style={{ ...styles.input, ...styles.email }}/>
            </div>
            <div className="pure-control-group">
                <Field name="password" component="input" 
                    type="password" placeholder="password" value=""
                    autoComplete="off"
                    style={{ ...styles.input, ...styles.password }}/>
            </div>
            <div className="pure-control-group">
                <Field name="reCAPTCHA" 
                    component={Captcha} />
            </div>
            <div className="pure-control-group">
              <button type="submit" 
                disabled={submitting} 
                style={_.merge({}, styles.submit, submitting && styles.buttonSubmitting)}>Login</button>
            </div>
          </fieldset>
        </form>
    )
}

LoginForm = reduxForm({
  // a unique name for the form
  form: 'Login',
  validate,
  onSubmit: onSubmitActions('LOGIN_FORM')
})(injectSheet(jssStyles)(LoginForm))

export default LoginForm