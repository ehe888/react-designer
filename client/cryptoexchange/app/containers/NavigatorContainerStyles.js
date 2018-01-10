// NavigatorContainerStyles.js

const NAVI_LIST_ICON_HEIGHT = `${48}px`

export default {
    main: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        // backgroundColor: 'rgb(28, 28, 29)',
        /* reset pointerEvents back to normal, 
           because the parent container is set to be transparent to event */
        pointerEvents: 'auto',   
        paddingLeft: NAVI_LIST_ICON_HEIGHT,
        color: 'black',
        overflow: 'none',
        borderRight: '1px solid rgba(0,0,0,0.1)',
    },
    naviContent: {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
    },
    naviList: {
        position: 'absolute',
        left: 0,
        top: 0,
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        width: NAVI_LIST_ICON_HEIGHT,
        height: '100%',
        backgroundColor: 'rgb(38, 38, 38)',
    },
    naviListItemLink: {
        display: 'block',
        width: NAVI_LIST_ICON_HEIGHT,
        height: NAVI_LIST_ICON_HEIGHT,
        textAlign: 'center',
    },
    naviListItemLinkContent: {
        lineHeight: NAVI_LIST_ICON_HEIGHT,
        color: 'rgb(157, 157, 157)',
    },
    naviListItemLinkContentActive: {
        color: 'white'
    },
    naviListItemLinkContentOnHover: {
        color: 'white',
        cursor: 'pointer'
    }
}