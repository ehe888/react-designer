// SourceCodeEditorContainerStyles.js
export default {
    main: {
        position: 'absolute',
        overflow: 'hidden',
        right: 0,
        top: 0,
        pointerEvents: 'auto', 
        opacity: 0.9,
        border: '1px solid #d1edff',
    },
    /* Style the tab */
    tab: {
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid #d1edff',
        backgroundColor: '#0f192a',
        cursor: 'move'
    },

    /* Style the buttons inside the tab */
    tabButton: {
        backgroundColor: 'inherit',
        float: 'left',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        padding: '4px 6px',
        color: '#d1edff',
        // transition: '0.3s',
        fontSize: '13px',
        pointerEvents: 'auto'
    },

    /* Change background color of buttons on hover */
    tabBbuttonOnHover: {
        backgroundColor: '#ddd',
        color: '#0f192a'
    },

    /* Create an active/current tablink class */
    tabButtonOnActive: {
        backgroundColor: '#ccc',
        color: '#0f192a'
    },
    tabButtonMinimized: {
        opacity: 0,
        pointerEvents: 'none'
    },
    tabTools: {
        cursor: 'pointer',
        position:'absolute', 
        right:0, 
        top: 0, 
        height:'100%', 
        paddingRight: '5px',
        textAlign: 'right' 
    }
}