// EditorContainerStyles.js
// Naming convention: {Container} + Styles.js
export default {
    main: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '2.2em',
        left: 0,
        background: '#f6f7f8',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        zIndex: 9999999,
    },
    previewMode: {
        opacity: 0,
        zIndex: -1
    },
    centralContent: {
        position: 'absolute',
        height: '100%',
        top: 0
    }
}