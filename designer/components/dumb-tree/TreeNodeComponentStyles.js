// TreeNodeComponentStyles.js

export default {
    main: {
        position: 'relative',
        display: 'inline-block',
        fontSize: '13px', 
        paddingTop: '3px', 
        paddingBottom: '3px',
        overflow: 'auto',
        height: '100%',
        whiteSpace: 'nowrap'
    },
    title: { 
        border: 'none', 
        outline: 'none', 
        padding: 0, 
        background: 'transparent', 
        color: 'white',
        cursor: 'pointer',
    },
    titleOnHover: {
        backgroundColor: '#ddd',
        color: '#0f192a'
    },
    treeChildrenList: {
        listStyleType: 'none',
        margin: 0,
        paddingLeft: '15px'
    },
    treeNodeIndicator: {
        color: 'white',
        cursor: 'pointer',
        width: '20px'
    }
}