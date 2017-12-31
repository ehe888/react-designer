// TreeContainerActions.js
// Actions related to TreeContainer

/**
 * Action Types
 */

export const REQUEST_TREE_NODE = "REQUEST_TREE_NODE"
export const REQUEST_TREE_NODE_REQUESTED = "EXPAND_TREE_NODE_REQUESTED"
export const REQUEST_TREE_NODE_SUCCEEDED = "REQUEST_TREE_NODE_SUCCEEDED"
export const REQUEST_TREE_NODE_FAILED = "REQUEST_TREE_NODE_FAILED"

export function requestTreeNode(path) {
    return { type: REQUEST_TREE_NODE_REQUESTED, payload: { path } }
}

