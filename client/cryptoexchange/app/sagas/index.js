import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'

import { 
    LOGIN_FORM_FAILURE,
    LOGIN_FORM_SUCCESS, 
    LOGIN_FORM_SUBMIT,
    } from '../actions'

import { 
    accountLogin
} from '../rest'
// import { 
//     REQUEST_TREE_NODE_REQUESTED, 
//     REQUEST_TREE_NODE_SUCCEEDED, 
//     REQUEST_TREE_NODE_FAILED } from '../containers/TreeContainerActions'

// import { 
//     LOAD_SOURCE_REQUESTED,
//     LOAD_SOURCE_SUCCEEDED,
//     LOAD_SOURCE_FAILED,
//     SAVE_SOURCE_CODE_REQUESTED,
//     SAVE_SOURCE_CODE_SUCCEEDED,
//     SAVE_SOURCE_CODE_FAILED,
//     } from '../containers/SourceCodeEditorContainerActions'

// function* getSourceDirectory(action) {
//     const { path } = action.payload
//     try {
//         const response = yield call(fetchSourceDirectory, path)
//         yield put({ type: REQUEST_TREE_NODE_SUCCEEDED, data: response.json, path })
//     } catch (e) {
//         yield put({ type: REQUEST_TREE_NODE_FAILED, path })
//     }
// }

// function* getSourceCode(action) {
//     const { path } = action.payload
//     try {
//         const response = yield call(fetchSourceCode, path)
//         yield put({ type: LOAD_SOURCE_SUCCEEDED, payload: { data: response.json, path } })
//     } catch (e) {
//         yield put({ type: LOAD_SOURCE_FAILED, payload: { path } })
//     }
// }

function* loginFormSubmit (action) {
    try {
        const response = yield call(accountLogin, action.payload);
        
        yield put({type: LOGIN_FORM_SUCCESS, payload: response.json});
    } catch (err) {
        const { message, status } = err
        yield put({type: LOGIN_FORM_FAILURE, payload: { _error: message, error: { message, status } }});
    }
}
  

function* mySaga() {
    yield takeLatest(LOGIN_FORM_SUBMIT, loginFormSubmit)
}

export default mySaga
  