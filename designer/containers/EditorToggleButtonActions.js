// EditorToggleButtonActions.js
// Actions fired by EditorToggleButton

/**
 * Action Types
 */
export const TOGGLE_EDITING = "TOGGLE_EDITING"


export function toggleEditing() {
    return { type: TOGGLE_EDITING }
}