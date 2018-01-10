// reducers/index.js
// index for all reducers
import { combineReducers } from 'redux'
import _ from 'lodash'
import { TICKER_UPDATED } from '../actions'


const initialState = { 
    authenticated: false, 
    uid: null, 
    accessToken: null 
}

function accountReducer(state = initialState, action){
    switch(action.type){
        case 'LOGIN_FORM_SUCCESS':{
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