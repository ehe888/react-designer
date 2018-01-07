import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import { 
    fetchSourceDirectory, 
    fetchSourceCode,
    saveSourceCode,
} from '../rest'
import { 
    REQUEST_TREE_NODE_REQUESTED, 
    REQUEST_TREE_NODE_SUCCEEDED, 
    REQUEST_TREE_NODE_FAILED } from '../containers/TreeContainerActions'

import { 
    LOAD_SOURCE_REQUESTED,
    LOAD_SOURCE_SUCCEEDED,
    LOAD_SOURCE_FAILED,
    SAVE_SOURCE_CODE_REQUESTED,
    SAVE_SOURCE_CODE_SUCCEEDED,
    SAVE_SOURCE_CODE_FAILED,
    } from '../containers/SourceCodeEditorContainerActions'

function* getSourceDirectory(action) {
    const { path } = action.payload
    try {
        const response = yield call(fetchSourceDirectory, path)
        yield put({ type: REQUEST_TREE_NODE_SUCCEEDED, data: response.json, path })
    } catch (e) {
        yield put({ type: REQUEST_TREE_NODE_FAILED, path })
    }
}

function* getSourceCode(action) {
    const { path } = action.payload
    try {
        const response = yield call(fetchSourceCode, path)
        yield put({ type: LOAD_SOURCE_SUCCEEDED, payload: { data: response.json, path } })
    } catch (e) {
        yield put({ type: LOAD_SOURCE_FAILED, payload: { path } })
    }
}

// const getChangedSourceCode = (state) => {
//     const openItems = state.sourceCodeEditor ? state.sourceCodeEditor.openItems : []
//     const activeIndex = state.sourceCodeEditor ? state.sourceCodeEditor.activeIndex : -1
//     if(activeIndex === -1 || openItems.length <= activeIndex ) return null

//     const sourceCode = state.sourceCodeEditor ? state.sourceCodeEditor.sourceCode : { }
//     return sourceCode[openItems[activeIndex]]
// }


// function* saveSourceCodeChange() {
//     let doc = yield select(getChangedSourceCode)
//     if(doc && doc.cm && doc.isClean && !doc.isClean()){
//         // Save content to server side
//         console.log("Document is no clean, need to sync")
//     }
// }

function* requestToSaveSourceCodeChanges(action) {
    const { path, code } = action.payload
    try{
        const response = yield call(saveSourceCode, path, code)
        yield put({ type: SAVE_SOURCE_CODE_SUCCEEDED, payload: { path } })
    } catch (e){
        yield put({ type: SAVE_SOURCE_CODE_FAILED, payload: { path } })
    }
}

function* mySaga() {
    yield takeEvery(REQUEST_TREE_NODE_REQUESTED, getSourceDirectory)
    yield takeLatest(LOAD_SOURCE_REQUESTED, getSourceCode)
    yield takeEvery(SAVE_SOURCE_CODE_REQUESTED, requestToSaveSourceCodeChanges)
}

export default mySaga
  