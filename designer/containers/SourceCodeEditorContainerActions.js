// SourceCodeEditorActions.js
// Actions related to SourceCodeEditor

/**
 * Action Types
 */
// Open a new source editor tab
export const OPEN_SOURCE_EDITOR = "OPEN_SOURCE_EDITOR"
export const CLOSE_SOURCE_EDITOR = "CLOSE_SOURCE_EDITOR"
export const SWITCH_SOURCE_EDITOR = "SWITCH_SOURCE_EDITOR"

export function openFileInSourceEditor(path) {
    return { type: OPEN_SOURCE_EDITOR, payload: { path }}
}
export function closeSourceEditor(index) {
    return { type: CLOSE_SOURCE_EDITOR, payload: {index} }
}
export function switchSourceEditor(index) {
    return { type: SWITCH_SOURCE_EDITOR, payload: { index } }
}

// Load source code from rest api
export const LOAD_SOURCE = "LOAD_SOURCE"
export const LOAD_SOURCE_REQUESTED = "LOAD_SOURCE_REQUESTED"
export const LOAD_SOURCE_SUCCEEDED = "LOAD_SOURCE_SUCCEEDED"
export const LOAD_SOURCE_FAILED = "LOAD_SOURCE_FAILED"

export function loadSource(path) {
    return { type: LOAD_SOURCE_REQUESTED, payload: { path } }
}

// Save content change to local store - NOT update to remote file on the server
export const SAVE_SOURCE_CODE = "SAVE_SOURCE_CODE"
export const SAVE_SOURCE_CODE_REQUESTED = "SAVE_SOURCE_CODE_REQUESTED"
export const SAVE_SOURCE_CODE_SUCCEEDED = "SAVE_SOURCE_CODE_SUCCEEDED"
export const SAVE_SOURCE_CODE_FAILED = "SAVE_SOURCE_CODE_FAILED"

export function saveSourceCodeChanges(path){
    return { type: SAVE_SOURCE_CODE, payload: { path }}
}

export function requestToSaveSourceCodeChanges(path, code){
    return { type: SAVE_SOURCE_CODE_REQUESTED, payload: { path, code} }
}
