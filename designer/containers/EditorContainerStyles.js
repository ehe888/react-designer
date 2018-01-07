// EditorContainerStyles.js
// Naming convention: {Container} + Styles.js
export default {
    main: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        background: 'rgba(51,51,51,0)',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 9999999,
    },
    previewMode: {
        opacity: 0,
        zIndex: -1
    }
};