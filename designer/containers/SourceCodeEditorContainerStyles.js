// SourceCodeEditorContainerStyles.js
export default {
    main: {
        position: 'absolute',
        overflow: 'hidden',
        right: 0,
        top: 0,
    },
    /* Style the tab */
    tab: {
        overflow: 'hidden',
        border: '1px solid #d1edff',
        backgroundColor: '#0f192a',
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
    }

}