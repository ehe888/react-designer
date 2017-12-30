// TreeContainerActions.js
// Actions related to TreeContainer

/**
 * Action Types
 */
export const EXPAND_NODE = "EXPAND_NODE"

/**
 * 
 * @param {string} path to be expand 
 */
export function loadTreeNode(path) {
    return { type: EXPAND_NODE, value: path }
}
