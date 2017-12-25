// Reducers.js
// All utility reducers
import _ from 'lodash'
import { TOGGLE_EDITING } from '../EditorToggleButtonActions'

const initialState = { editing: true }
function rootReducer(state = initialState, action){
    switch(action.type){
        case TOGGLE_EDITING:
            return _.merge({}, state, { editing: !state.editing })
        default:
            return state

    }
}

export default rootReducer