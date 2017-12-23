// Reducers.js
// All utility reducers
import { combineReducers } from 'redux'
import _ from 'lodash'
import { TOGGLE_EDITING } from './EditorToggleButtonActions'

const initialState = { editing: true }
function toggleEditingReducer(state = initialState, action){
    switch(action.type){
        case TOGGLE_EDITING:
            return _.merge({}, state, { editing: !state.editing })
        default:
            return state

    }
}

const reducers = combineReducers({
    rootContainer: toggleEditingReducer
})

export default reducers