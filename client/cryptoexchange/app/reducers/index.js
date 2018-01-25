// reducers/index.js
// index for all reducers
import { combineReducers } from 'redux'
import _ from 'lodash'
import { 
    TICKER_UPDATED,
    LOGIN_FORM_FAILURE,
    LOGIN_FORM_SUCCESS, 
    } from '../actions'


const initialState = { 
    authenticated: false, 
    uid: null, 
    accessToken: null 
}

function accountReducer(state = initialState, action){
    switch(action.type){
        case LOGIN_FORM_SUCCESS: {
            const { success, payload } = action.payload
            if(success && payload.accessToken){
              return _.merge({}, state, { 
                    authenticated: true, 
                    uid: payload.uid, 
                    email: payload.email, 
                    nickname: payload.nickname 
              })
            }else{
              return state
            }
        }
        case LOGIN_FORM_FAILURE: {
            //If login failed, the payload contains error message and error status
            const { message, status } = action.payload.error
            //TODO: popup error message
            return _.merge({}, state, {
                authenticated: false,
                error: {
                    status: status,
                    message: message
                }
            })
        }
        default:
            return state

    }
}

function exchangeReducer(state = {}, action){
    switch(action.type){
        case TICKER_UPDATED:{
            const payload = JSON.parse(action.payload)
            return { ...state, ticker: [ ...payload.data ] }
        }
        default:
            return state

    }
}

const reducers = combineReducers({
    account: accountReducer,
    exchange: exchangeReducer,
})

export default reducers