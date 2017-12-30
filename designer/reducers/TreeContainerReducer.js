// Reducers.js
// All utility reducers
import _ from 'lodash'
import { EXPAND_NODE } from '../containers/TreeContainerActions'

const initialState = { 
    
}

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

function reducer(state = initialState, action){
    switch(action.type){
        case EXPAND_NODE:
        {
            const path = action.value
            const { nodeData } = state
            if(!nodeData){
                return _.merge({}, state, { nodeData: {
                        id: '/',
                        name: 'root',
                        path: '/',
                        isLeaf: false,
                        children: []
                    } 
                })
            }else{
                const find = traverseTree(nodeData, path)
                if(find !== null){
                    find.children = [{
                        id: `${find.path}/path1`,
                        name: 'path1',
                        path: `${find.path}/path1`,
                        isLeaf: false,
                        children: []
                    },{
                        id: `${find.path}/path2`,
                        name: 'path2',
                        path: `${find.path}/path2`,
                        isLeaf: true
                    }]
                    return _.merge({}, state, { nodeData: nodeData })
                }
            }
            return state
        }
        default:
            return state
    }
}

export default reducer