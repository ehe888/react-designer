// reducers/index.js
// index for all reducers
import { combineReducers } from 'redux'
import rootReducer from './RootReducer' 
import sourceCodeEditorReducer from './SourceCodeEditorContainerReducer'
import treeContainerReducer from './TreeContainerReducer'

const reducers = combineReducers({
    root: rootReducer,
    sourceCodeEditor: sourceCodeEditorReducer,
    treeContainer: treeContainerReducer
})

export default reducers