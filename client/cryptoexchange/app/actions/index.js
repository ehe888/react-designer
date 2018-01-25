// index.js - Actions

export const TICKER_UPDATED = 'TICKER_UPDATED'

export const tickerUpdate = (payload) => {
    return {
        type: TICKER_UPDATED, payload
    }
}

/**
 * Follow the naming convention required by redux-form-submit-saga middleware
 * {FORM_NAME}'s actions should be:
 *      {FORM_NAME}_SUCCESS
 *      {FORM_NAME}_FAILURE
 *      {FORM_NAME}_SUBMIT
 */
export const LOGIN_FORM_SUCCESS = "LOGIN_FORM_SUCCESS"
export const LOGIN_FORM_FAILURE = "LOGIN_FORM_FAILURE"
export const LOGIN_FORM_SUBMIT = "LOGIN_FORM_SUBMIT"