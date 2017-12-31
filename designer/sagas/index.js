import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchSourceFiles } from '../rest'
import { 
    REQUEST_TREE_NODE_REQUESTED, 
    REQUEST_TREE_NODE_SUCCEEDED, 
    REQUEST_TREE_NODE_FAILED } from '../containers/TreeContainerActions'

function* fetchSources(action) {
    const { path } = action.payload
    try {
        const response = yield call(fetchSourceFiles, path)
        yield put({ type: REQUEST_TREE_NODE_SUCCEEDED, data: response.json, path })
    } catch (e) {
        yield put({ type: REQUEST_TREE_NODE_FAILED, path })
    }
}


function* mySaga() {
    yield takeEvery(REQUEST_TREE_NODE_REQUESTED, fetchSources);
}

export default mySaga
  