// SourceCodeEditorActions.js
// Actions related to SourceCodeEditor

/**
 * Action Types
 */
export const START_SYNCING = "START_SYNCING"
export const COMPLETE_SYNCING = "COMPLETE_SYNCING"
export const SHOW_SOURCE_CODE = "SHOW_SOURCE_CODE"


export function startSyncing() {
    return { type: START_SYNCING }
}

export function completeSyncing() {
    return { type: COMPLETE_SYNCING }
}

/**
 * @param {number} index the index in source file array 
 */
export function showSourceCode(index) {
    return { type: SHOW_SOURCE_CODE, value: index }
}