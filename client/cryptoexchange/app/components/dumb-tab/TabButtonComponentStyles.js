// TabButtonComponentStyles.js

export default {
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
    }
}