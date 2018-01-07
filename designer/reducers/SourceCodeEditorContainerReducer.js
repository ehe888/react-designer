// Reducers.js
// All utility reducers
import _ from 'lodash'
import { 
    OPEN_SOURCE_EDITOR, 
    CLOSE_SOURCE_EDITOR, 
    SWITCH_SOURCE_EDITOR,
    LOAD_SOURCE_SUCCEEDED, 
    LOAD_SOURCE_FAILED,
    SAVE_SOURCE_CODE,
    SAVE_SOURCE_CODE_SUCCEEDED,
    SAVE_SOURCE_CODE_FAILED } from '../containers/SourceCodeEditorContainerActions'

const initialState = { 
    activeIndex: 0,
    openItems: [ 'Untitled-1' ],
    sourceCode: {
        'Untitled-1': window.CodeMirror.Doc(' // Code') 
    },
    syncing: [],
}

function reducer(state = initialState, action){
    switch(action.type){
        case OPEN_SOURCE_EDITOR:
        {
            const { path } = action.payload
            const openItems = [...state.openItems ]
            
            const activeIndex = _.indexOf(openItems, path)
            
            if(activeIndex >= 0){
                return { ...state, activeIndex }
            }else{
                openItems.push(path)
                return { ...state, openItems, activeIndex: openItems.length - 1  }
            }
            
        }
        case CLOSE_SOURCE_EDITOR:
        {
            const { index } = action.payload
            const openItems = [ ...state.openItems ]
            let sourceCode = { ...state.sourceCode }
            let activeIndex = state.activeIndex

            if(index >= 0 && index < openItems.length){
                sourceCode = _.omit(sourceCode, openItems[index])
                _.pullAt(openItems, index)
                
                if(openItems.length === 0) return { ...state, ...initialState }

                if(activeIndex >= index) activeIndex--  
                return { ...state, openItems, activeIndex, sourceCode  }
            }
            return state
        }
        case SWITCH_SOURCE_EDITOR:
        {
            const { index } = action.payload
            const openItems = [ ...state.openItems ]
            let activeIndex = state.activeIndex
            if( index !==  activeIndex && index >= 0 && index < openItems.length){
                return { ...state, activeIndex: index }
            }
            return state
        }
        case LOAD_SOURCE_SUCCEEDED:{
            const { path, data  } = action.payload
            const sourceCode = { ...state.sourceCode, [path]: window.CodeMirror.Doc(`${data.code}`) }
            return { ...state,  sourceCode }
        }   
        case LOAD_SOURCE_FAILED:{
            const { path } = action.payload
            return { ...state, sourceCode: { [path]: '...failed to load source file' } }
        }
        case SAVE_SOURCE_CODE: {
            const { path } = action.payload
            const sourceCode = { ...state.sourceCode }
            const doc = sourceCode[path]
            if(doc && doc.cm && doc.isClean && doc.isClean()){
                return state
            }else{
                const syncing = [ ...state.syncing, path ]
                return { ...state, syncing }
            }
        }
        case SAVE_SOURCE_CODE_SUCCEEDED: {
            const { path } = action.payload
            const sourceCode = { ...state.sourceCode }
            /** Below code is anti-pattern, 
             * Use CodeMirror doc object to change its state bypassing the redux state management
             * there should be a better way to inform CodeMirror that file saved */
            const doc = sourceCode[path]
            if(doc && doc.cm && doc.markClean){
                doc.markClean()
            }
            const syncing = [ ...state.syncing ]
            _.pull(syncing, path)
            return { ...state, syncing, synced: path }
        }
        case SAVE_SOURCE_CODE_FAILED: {
            const { path } = action.payload
            const syncing = [ ...state.syncing ]
            _.pull(syncing, path)
            return { ...state, syncing }
        }
        default:
            return state
    }
}

export default reducer