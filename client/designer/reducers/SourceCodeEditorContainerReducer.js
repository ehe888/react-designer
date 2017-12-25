// Reducers.js
// All utility reducers
import _ from 'lodash'
import { START_SYNCING, COMPLETE_SYNCING, SHOW_SOURCE_CODE } from '../SourceCodeEditorContainerActions'

const initialState = { 
    syncing: false,
    activeIndex: 0 
}

function reducer(state = initialState, action){
    switch(action.type){
        case START_SYNCING:
        case COMPLETE_SYNCING:
            return _.merge({}, state, { syncing: state.syncing ? state.syncing : !state.syncing })
        case SHOW_SOURCE_CODE:
            return _.merge({}, state, { activeIndex: action.value })
        default:
            return state
    }
}

export default reducer