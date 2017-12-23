// BlockContainerStyles.js
export default {
    main: {
        position: 'relative',
        border: 0,
    },
    highlightMask: {
        position: 'absolute',
        top: 0,
        left: 0,
        boxSizing: 'border-box',
        height: '100%',
        width: '100%',
        zIndex: 9999999,
    },
    highlightMaskDisabled: {
        pointerEvents: 'none',
    },
    highlightMaskOnHover: {
        outline: 'none',
        border: '1px solid #9ecaed',
        boxShadow: '0 0 10px #9ecaed',
    }
};