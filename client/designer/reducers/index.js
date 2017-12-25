// reducers/index.js
// index for all reducers
import { combineReducers } from 'redux'
import rootReducer from './RootReducer' 
import sourceCodeEditorReducer from './SourceCodeEditorContainerReducer'

const reducers = combineReducers({
    root: rootReducer,
    sourceCodeEditor: sourceCodeEditorReducer
})

export default reducers