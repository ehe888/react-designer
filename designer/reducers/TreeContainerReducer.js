// Reducers.js
// All utility reducers
import _ from 'lodash'
import { 
    REQUEST_TREE_NODE_REQUESTED, 
    REQUEST_TREE_NODE_SUCCEEDED } from '../containers/TreeContainerActions'

function traverseTree(root, targetPath){
    if(root.path === targetPath){
        return root
    }

    if(!root.isLeaf && root.children && _.startsWith(targetPath, root.path)){
        for(let i=0; i < root.children.length; i++){
            const find = traverseTree(root.children[i], targetPath)
            if(find !== null){
                return find
            }   
        }
    }
    return null;
}

const initialState = { 
    data: {
        id: '/',
        name: '/',
        path: '/',
        children: null
    }
}

function reducer(state = initialState, action){
    switch(action.type){
        case REQUEST_TREE_NODE_REQUESTED:
        {
            const { path } = action.payload
            const { ...treeData } = { ...state.data }
            const find = traverseTree(treeData, path)
            if( find === null) return { ...state }
            find.isFetching = true
            return { ...state, data: treeData }
        }
        case REQUEST_TREE_NODE_SUCCEEDED:
        {
            // Fill the response tree data into the tree structure in store
            const { data, path } = action
            const { ...treeData } = { ...state.data }
            const find = traverseTree(treeData, path)
            if( find === null) return { ...state }

            find.isFetching = false,
            _.merge(find, {children: data} )
            // find.children = [ ...response ]
            return { ...state, data: treeData }
        }
        default:
            return state
    }
}

export default reducer