// LoginContainer.js
// Use redux-form

import React from 'react'
import { Field, reduxForm } from 'redux-form'
import ReCAPTCHA from 'react-google-recaptcha' //https://github.com/erikras/redux-form/issues/1880
import styles from './LoginFormStyles'
import _ from 'lodash'
import { onSubmitActions } from 'redux-form-submit-saga'


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
  
  // if (!values.reCAPTCHA) {
  //   errors.reCAPTCHA = 'Required'
  // }

  return errors
}

let LoginForm = props => {
    const { handleSubmit, submitting, submitSucceeded } = props  // handleSubmit is the enhanced function injected by the reduxForm HOC,
                                                // Don't confuse it with onSumit property of the exported LoginForm HOC
  
    //REF: https://github.com/erikras/redux-form/issues/1880
    // Googld reCAPTCHA redux-form Field wrapper
    const captcha = (props) => (
        <div style={{ display: 'inline-block' }}>
            <ReCAPTCHA
                sitekey={'6LfZrj8UAAAAAIcDyZG1DCLoTeg8uNz6mBRfHDHi'} /* process.env.RECAPTCHA_SITE_KEY */
                onChange={props.input.onChange}
                />
        </div>
    );

    
    return (
        <form className="pure-form pure-form-aligned" onSubmit={handleSubmit}>
          <fieldset>
            <div className="pure-control-group">
                <Field name="email" component="input" 
                    type="email" placeholder="email" value=""
                    style={{ ...styles.input, ...styles.email }}/>
            </div>
            <div className="pure-control-group">
                <Field name="password" component="input" 
                    type="password" placeholder="password" value=""
                    style={{ ...styles.input, ...styles.password }}/>
            </div>
            <div className="pure-control-group">
                <Field name="reCAPTCHA" 
                    component={captcha} />
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
})(LoginForm)

export default LoginForm