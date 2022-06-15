//
// Shared Variants for HTML Elements
// ...
//

import variant from '../scale-variant'

const variants = {
    display: {
        block: {
            display: 'block',
        },
        inlineBlock: {
            display: 'inline-block',
        },
        inline: {
            display: 'inline',
        },
        flex: {
            display: 'flex',
        },
        inlineFlex: {
            display: 'inline-flex',
        },
        table: {
            display: 'table',
        },
        inlineTable: {
            display: 'inline-table',
        },
        tableCaption: {
            display: 'table-caption',
        },
        tableCell: {
            display: 'table-cell',
        },
        tableColumn: {
            display: 'table-column',
        },
        tableColumnGroup: {
            display: 'table-column-group',
        },
        tableFooterGroup: {
            display: 'table-footer-group',
        },
        tableHeaderGroup: {
            display: 'table-header-group',
        },
        tableRowGroup: {
            display: 'table-row-group',
        },
        tableRow: {
            display: 'table-row',
        },
        flowRoot: {
            display: 'flow-root',
        },
        inlineGrid: {
            display: 'inline-grid',
        },
        contents: {
            display: 'contents',
        },
        listItem: {
            display: 'list-item',
        },
        hidden: {
            display: 'none',
        },
    },
    columns: {
        1: {
            gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        },
        2: {
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        },
        3: {
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        },
        4: {
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        },
        5: {
            gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
        },
        6: {
            gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
        },
        7: {
            gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
        },
        8: {
            gridTemplateColumns: 'repeat(8, minmax(0, 1fr))',
        },
        9: {
            gridTemplateColumns: 'repeat(9, minmax(0, 1fr))',
        },
        10: {
            gridTemplateColumns: 'repeat(10, minmax(0, 1fr))',
        },
        11: {
            gridTemplateColumns: 'repeat(11, minmax(0, 1fr))',
        },
        12: {
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
        },
        none: {
            gridTemplateColumns: 'none',
        },
    },
    columnsStartEnd: {
        spanAuto: {
            gridColumn: 'auto',
        },
        span1: {
            gridColumn: 'span 1 / span 1',
        },
        span2: {
            gridColumn: 'span 2 / span 2',
        },
        span3: {
            gridColumn: 'span 3 / span 3',
        },
        span4: {
            gridColumn: 'span 4 / span 4',
        },
        span5: {
            gridColumn: 'span 5 / span 5',
        },
        span6: {
            gridColumn: 'span 6 / span 6',
        },
        span7: {
            gridColumn: 'span 7 / span 7',
        },
        span8: {
            gridColumn: 'span 8 / span 8',
        },
        span9: {
            gridColumn: 'span 9 / span 9',
        },
        span10: {
            gridColumn: 'span 10 / span 10',
        },
        span11: {
            gridColumn: 'span 11 / span 11',
        },
        span12: {
            gridColumn: 'span 12 / span 12',
        },
        spanFull: {
            gridColumn: '1 / -1',
        },
        start1: {
            gridColumnStart: '1',
        },
        start2: {
            gridColumnStart: '2',
        },
        start3: {
            gridColumnStart: '3',
        },
        start4: {
            gridColumnStart: '4',
        },
        start5: {
            gridColumnStart: '5',
        },
        start6: {
            gridColumnStart: '6',
        },
        start7: {
            gridColumnStart: '7',
        },
        start8: {
            gridColumnStart: '8',
        },
        start9: {
            gridColumnStart: '9',
        },
        start10: {
            gridColumnStart: '10',
        },
        start11: {
            gridColumnStart: '11',
        },
        start12: {
            gridColumnStart: '12',
        },
        start13: {
            gridColumnStart: '13',
        },
        startAuto: {
            gridColumnStart: 'auto',
        },
        end1: {
            gridColumnEnd: '1',
        },
        end2: {
            gridColumnEnd: '2',
        },
        end3: {
            gridColumnEnd: '3',
        },
        end4: {
            gridColumnEnd: '4',
        },
        end5: {
            gridColumnEnd: '5',
        },
        end6: {
            gridColumnEnd: '6',
        },
        end7: {
            gridColumnEnd: '7',
        },
        end8: {
            gridColumnEnd: '8',
        },
        end9: {
            gridColumnEnd: '9',
        },
        end10: {
            gridColumnEnd: '10',
        },
        end11: {
            gridColumnEnd: '11',
        },
        end12: {
            gridColumnEnd: '12',
        },
        end13: {
            gridColumnEnd: '13',
        },
        endAuto: {
            gridColumnEnd: 'auto',
        },
    },
    templateRows: {
        1: {
            gridTemplateRows: 'repeat(1, minmax(0, 1fr))',
        },
        2: {
            gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
        },
        3: {
            gridTemplateRows: 'repeat(3, minmax(0, 1fr))',
        },
        4: {
            gridTemplateRows: 'repeat(4, minmax(0, 1fr))',
        },
        5: {
            gridTemplateRows: 'repeat(5, minmax(0, 1fr))',
        },
        6: {
            gridTemplateRows: 'repeat(6, minmax(0, 1fr))',
        },
        none: {
            gridTemplateRows: 'none)',
        },
    },
    rowStartEnd: {
        spanAuto: {
            gridRow: 'auto',
        },
        span1: {
            gridRow: 'span 1 / span 1',
        },
        span2: {
            gridRow: 'span 2 / span 2',
        },
        span3: {
            gridRow: 'span 3 / span 3',
        },
        span4: {
            gridRow: 'span 4 / span 4',
        },
        span5: {
            gridRow: 'span 5 / span 5',
        },
        span6: {
            gridRow: 'span 6 / span 6',
        },
        full: {
            gridRow: '1 / -1',
        },
        start1: {
            gridRowStart: '1',
        },
        start2: {
            gridRowStart: '2',
        },
        start3: {
            gridRowStart: '3',
        },
        start4: {
            gridRowStart: '4',
        },
        start5: {
            gridRowStart: '5',
        },
        start6: {
            gridRowStart: '6',
        },
        start7: {
            gridRowStart: '7',
        },
        startAuto: {
            gridRowStart: 'auto',
        },
        end1: {
            gridRowEnd: '1',
        },
        end2: {
            gridRowEnd: '2',
        },
        end3: {
            gridRowEnd: '3',
        },
        end4: {
            gridRowEnd: '4',
        },
        end5: {
            gridRowEnd: '5',
        },
        end6: {
            gridRowEnd: '6',
        },
        end7: {
            gridRowEnd: '7',
        },
        endAuto: {
            gridRowEnd: 'auto',
        },
    },
    autoFlow: {
        row: {
            gridAutoFlow: 'row',
        },
        col: {
            gridAutoFlow: 'column',
        },
        rowDense: {
            gridAutoFlow: 'row dense',
        },
        columnDense: {
            gridAutoFlow: 'column dense',
        },
    },
    autoColumns: {
        auto: {
            gridAutoColumns: 'auto',
        },
        min: {
            gridAutoColumns: 'min-content',
        },
        max: {
            gridAutoColumns: 'max-content',
        },
        fr: {
            gridAutoColumns: 'minmax(0, 1fr)',
        },
    },
    autoRows: {
        auto: {
            gridAutoRows: 'auto',
        },
        min: {
            gridAutoRows: 'min-content',
        },
        max: {
            gridAutoRows: 'max-content',
        },
        fr: {
            gridAutoRows: 'minmax(0, 1fr)',
        },
    },
    transition: {
        none: {
            transition: 'none',
        },
        all: {
            tnProperty: 'all',
            tnFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            tnDuration: '150ms',
        },
        transition: {
            tnProperty: [
                'color',
                'background-color',
                'border-color',
                'text-decoration-color',
                'fill',
                'stroke',
                'opacity',
                'box-shadow',
                'transform',
                'filter',
                'backdrop-filter',
            ].join(' '),
            tnFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            tnDuration: '150ms',
        },
        fill: {
            tnProperty: 'fill',
            tnFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            tnDuration: '150ms',
        },
        stroke: {
            tnProperty: 'stroke',
            tnFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            tnDuration: '150ms',
        },
        filter: {
            tnProperty: 'filter',
            tnFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            tnDuration: '150ms',
        },
        backdropFilter: {
            tnProperty: 'backdrop-filter',
            tnFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            tnDuration: '150ms',
        },
        backgroundColor: {
            tnProperty: 'background-color',
            tnFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            tnDuration: '150ms',
        },
        borderColor: {
            tnProperty: 'border-color',
            tnFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            tnDuration: '150ms',
        },
        textDecorationColor: {
            tnProperty: 'text-decoration-color',
            tnFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            tnDuration: '150ms',
        },
        colors: {
            tnProperty:
                'color background-color border-color text-decoration-color fill stroke',
            tnFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            tnDuration: '150ms',
        },
        opacity: {
            tnProperty: 'opacity',
            tnFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            tnDuration: '150ms',
        },
        boxShadow: {
            tnProperty: 'box-shadow',
            tnFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            tnDuration: '150ms',
        },
        transform: {
            tnProperty: 'transform',
            tnFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            tnDuration: '150ms',
        },
    },
    transitionProperty: {
        none: {
            tnProperty: 'none',
        },
        all: {
            tnProperty: 'all',
        },
        transition: {
            tnProperty: [
                'color',
                'background-color',
                'border-color',
                'text-decoration-color',
                'fill',
                'stroke',
                'opacity',
                'box-shadow',
                'transform',
                'filter',
                'backdrop-filter',
            ].join(' '),
        },
        fill: {
            tnProperty: 'fill',
        },
        stroke: {
            tnProperty: 'stroke',
        },
        filter: {
            tnProperty: 'filter',
        },
        backdropFilter: {
            tnProperty: 'backdrop-filter',
        },
        backgroundColor: {
            tnProperty: 'background-color',
        },
        borderColor: {
            tnProperty: 'border-color',
        },
        textDecorationColor: {
            tnProperty: 'text-decoration-color',
        },
        colors: {
            tnProperty: [
                'color',
                'background-color',
                'border-color',
                'text-decoration-color',
                'fill',
                'stroke',
            ].join(' '),
        },
        opacity: {
            tnProperty: 'opacity',
        },
        boxShadow: {
            tnProperty: 'box-shadow',
        },
        transform: {
            tnProperty: 'transform',
        },
    },
    transitionDuration: {
        75: {
            tnDuration: '75ms',
        },
        100: {
            tnDuration: '100ms',
        },
        150: {
            tnDuration: '150ms',
        },
        200: {
            tnDuration: '200ms',
        },
        300: {
            tnDuration: '300ms',
        },
        400: {
            tnDuration: '400ms',
        },
        500: {
            tnDuration: '500ms',
        },
        700: {
            tnDuration: '700ms',
        },
        1000: {
            tnDuration: '1000ms',
        },
    },
    transitionTimingFunction: {
        easeLinear: {
            tnFunction: 'linear',
        },
        easeIn: {
            tnFunction: 'cubic-bezier(0.4, 0, 1, 1)',
        },
        easeOut: {
            tnFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        },
        easeInOut: {
            tnFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
    },
    transitionDelay: {
        75: {
            transitionDelay: '75ms',
        },
        100: {
            transitionDelay: '100ms',
        },
        150: {
            transitionDelay: '150ms',
        },
        200: {
            transitionDelay: '200ms',
        },
        300: {
            transitionDelay: '300ms',
        },
        400: {
            transitionDelay: '400ms',
        },
        500: {
            transitionDelay: '500ms',
        },
        700: {
            transitionDelay: '700ms',
        },
        1000: {
            transitionDelay: '1000ms',
        },
    },
    transitionIterationCount: {
        infinite: {
            transitionIterationCount: 'infinite',
        },
        1: {
            transitionIterationCount: 1,
        },
        2: {
            transitionIterationCount: 2,
        },
        3: {
            transitionIterationCount: 3,
        },
        4: {
            transitionIterationCount: 4,
        },
        5: {
            transitionIterationCount: 5,
        },
        6: {
            transitionIterationCount: 6,
        },
        7: {
            transitionIterationCount: 7,
        },
        8: {
            transitionIterationCount: 8,
        },
        9: {
            transitionIterationCount: 9,
        },
        10: {
            transitionIterationCount: 10,
        },
        20: {
            transitionIterationCount: 20,
        },
        30: {
            transitionIterationCount: 30,
        },
        40: {
            transitionIterationCount: 40,
        },
        50: {
            transitionIterationCount: 50,
        },
        60: {
            transitionIterationCount: 60,
        },
        70: {
            transitionIterationCount: 70,
        },
        80: {
            transitionIterationCount: 80,
        },
        90: {
            transitionIterationCount: 90,
        },
        100: {
            transitionIterationCount: 100,
        },
    },
    animation: {
        none: {
            animation: 'none',
        },
        all: {
            animationProperty: 'all',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            animationDuration: '150ms',
        },
        animation: {
            trasitionProperty: [
                'color',
                'background-color',
                'border-color',
                'text-decoration-color',
                'fill',
                'stroke',
                'opacity',
                'box-shadow',
                'transform',
                'filter',
                'backdrop-filter',
            ].join(' '),
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            animationDuration: '150ms',
        },
        fill: {
            animationProperty: 'fill',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            animationDuration: '150ms',
        },
        stroke: {
            animationProperty: 'stroke',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            animationDuration: '150ms',
        },
        filter: {
            animationProperty: 'filter',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            animationDuration: '150ms',
        },
        backdropFilter: {
            animationProperty: 'backdrop-filter',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            animationDuration: '150ms',
        },
        backgroundColor: {
            animationProperty: 'background-color',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            animationDuration: '150ms',
        },
        borderColor: {
            animationProperty: 'border-color',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            animationDuration: '150ms',
        },
        textDecorationColor: {
            animationProperty: 'text-decoration-color',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            animationDuration: '150ms',
        },
        colors: {
            animationProperty: [
                'color',
                'background-color',
                'border-color',
                'text-decoration-color',
                'fill',
                'stroke',
            ].join(' '),
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            animationDuration: '150ms',
        },
        opacity: {
            animationProperty: 'opacity',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            animationDuration: '150ms',
        },
        shadow: {
            animationProperty: 'box-shadow',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            animationDuration: '150ms',
        },
        transform: {
            animationProperty: 'transform',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            animationDuration: '150ms',
        },
    },
    animationProperty: {
        none: {
            animation: 'none',
        },
        all: {
            animationProperty: 'all',
        },
        animation: {
            animationProperty: [
                'color',
                'background-color',
                'border-color',
                'text-decoration-color',
                'fill',
                'stroke',
                'opacity',
                'box-shadow',
                'transform',
                'filter',
                'backdrop-filter',
            ].join(' '),
        },
        fill: {
            animationProperty: 'fill',
        },
        stroke: {
            animationProperty: 'stroke',
        },
        filter: {
            animationProperty: 'filter',
        },
        backdropFilter: {
            animationProperty: 'backdrop-filter',
        },
        backgroundColor: {
            animationProperty: 'background-color',
        },
        borderColor: {
            animationProperty: 'border-color',
        },
        textDecorationColor: {
            animationProperty: 'text-decoration-color',
        },
        colors: {
            animationProperty: [
                'color',
                'background-color',
                'border-color',
                'text-decoration-color',
                'fill',
                'stroke',
            ].join(' '),
        },
        opacity: {
            animationProperty: 'opacity',
        },
        boxShadow: {
            animationProperty: 'box-shadow',
        },
        transform: {
            animationProperty: 'transform',
        },
    },
    animationDuration: {
        75: {
            animationDuration: '75ms',
        },
        100: {
            animationDuration: '100ms',
        },
        150: {
            animationDuration: '150ms',
        },
        200: {
            animationDuration: '200ms',
        },
        300: {
            animationDuration: '300ms',
        },
        400: {
            animationDuration: '400ms',
        },
        500: {
            animationDuration: '500ms',
        },
        700: {
            animationDuration: '700ms',
        },
        1000: {
            animationDuration: '1000ms',
        },
    },
    animationTimingFunction: {
        easeLinear: {
            animationTimingFunction: 'linear',
        },
        easeIn: {
            animationTimingFunction: 'cubic-bezier(0.4, 0, 1, 1)',
        },
        easeOut: {
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        },
        easeInOut: {
            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
    },
    animationDelay: {
        75: {
            animationDelay: '75ms',
        },
        100: {
            animationDelay: '100ms',
        },
        150: {
            animationDelay: '150ms',
        },
        200: {
            animationDelay: '200ms',
        },
        300: {
            animationDelay: '300ms',
        },
        400: {
            animationDelay: '400ms',
        },
        500: {
            animationDelay: '500ms',
        },
        700: {
            animationDelay: '700ms',
        },
        1000: {
            animationDelay: '1000ms',
        },
    },
    animationIterationCount: {
        infinite: {
            animationIterationCount: 'infinite',
        },
        1: {
            animationIterationCount: 1,
        },
        2: {
            animationIterationCount: 2,
        },
        3: {
            animationIterationCount: 3,
        },
        4: {
            animationIterationCount: 4,
        },
        5: {
            animationIterationCount: 5,
        },
        6: {
            animationIterationCount: 6,
        },
        7: {
            animationIterationCount: 7,
        },
        8: {
            animationIterationCount: 8,
        },
        9: {
            animationIterationCount: 9,
        },
        10: {
            animationIterationCount: 10,
        },
        20: {
            animationIterationCount: 20,
        },
        30: {
            animationIterationCount: 30,
        },
        40: {
            animationIterationCount: 40,
        },
        50: {
            animationIterationCount: 50,
        },
        60: {
            animationIterationCount: 60,
        },
        70: {
            animationIterationCount: 70,
        },
        80: {
            animationIterationCount: 80,
        },
        90: {
            animationIterationCount: 90,
        },
        100: {
            animationIterationCount: 100,
        },
    },
    contentAlign: {
        left: {
            textAlign: 'left',
            justifyContent: 'flex-start',
        },
        right: {
            textAlign: 'right',
            justifyContent: 'flex-end',
        },
        center: {
            textAlign: 'center',
            justifyContent: 'center',
        },
    },
    outlineWidth: {
        0: {
            outlineWidth: '0px',
        },
        1: {
            outlineWidth: '1px',
        },
        2: {
            outlineWidth: '2px',
        },
        3: {
            outlineWidth: '3px',
        },
        4: {
            outlineWidth: '4px',
        },
        8: {
            outlineWidth: '8px',
        },
    },
    outlineStyle: {
        none: {
            outlineStyle: 'none',
        },
        solid: {
            outlineStyle: 'solid',
        },
        dotted: {
            outlineStyle: 'dotted',
        },
        dashed: {
            outlineStyle: 'dashed',
        },
        double: {
            outlineStyle: 'double',
        },
        hidden: {
            outlineStyle: 'hidden',
        },
        groove: {
            outlineStyle: 'groove',
        },
        ridge: {
            outlineStyle: 'ridge',
        },
        inset: {
            outlineStyle: 'inset',
        },
        outset: {
            outlineStyle: 'outset',
        },
    },
    outlineOffset: {
        0: {
            outlineOffset: '0px',
        },
        1: {
            outlineOffset: '1px',
        },
        2: {
            outlineOffset: '2px',
        },
        3: {
            outlineOffset: '3px',
        },
        4: {
            outlineOffset: '4px',
        },
        8: {
            outlineOffset: '8px',
        },
    },
    // filter
    blur: {
        none: {
            filter: 'blur(0)',
        },
        sm: {
            filter: 'blur(4px)',
        },
        default: {
            filter: 'blur(8px)',
        },
        md: {
            filter: 'blur(12px)',
        },
        lg: {
            filter: 'blur(16px)',
        },
        xl: {
            filter: 'blur(24px)',
        },
        '2xl': {
            filter: 'blur(40px)',
        },
        '3xl': {
            filter: 'blur(64px)',
        },
    },
    brightness: {
        0: {
            filter: 'brightness(0)',
        },
        50: {
            filter: 'brightness(.5)',
        },
        75: {
            filter: 'brightness(.75)',
        },
        90: {
            filter: 'brightness(.9)',
        },
        95: {
            filter: 'brightness(.95)',
        },
        100: {
            filter: 'brightness(1)',
        },
        105: {
            filter: 'brightness(1.05)',
        },
        110: {
            filter: 'brightness(1.1)',
        },
        125: {
            filter: 'brightness(1.25)',
        },
        150: {
            filter: 'brightness(1.5)',
        },
        200: {
            filter: 'brightness(2)',
        },
    },
    contrast: {
        0: {
            filter: 'contrast(0)',
        },
        50: {
            filter: 'contrast(.5)',
        },
        75: {
            filter: 'contrast(.75)',
        },
        100: {
            filter: 'contrast(1)',
        },
        125: {
            filter: 'contrast(1.25)',
        },
        150: {
            filter: 'contrast(1.5)',
        },
        200: {
            filter: 'contrast(2)',
        },
    },
    grayscale: {
        0: {
            filter: 'grayscale(0)',
        },
        1: {
            filter: 'grayscale(100%)',
        },
    },
    hueRotate: {
        0: {
            filter: 'hue-rotate(0)',
        },
        15: {
            filter: 'hue-rotate(15deg)',
        },
        30: {
            filter: 'hue-rotate(30deg)',
        },
        60: {
            filter: 'hue-rotate(60deg)',
        },
        90: {
            filter: 'hue-rotate(90deg)',
        },
        180: {
            filter: 'hue-rotate(180deg)',
        },
    },
    invert: {
        0: {
            filter: 'invert(0)',
        },
        1: {
            filter: 'invert(100%)',
        },
    },
    saturate: {
        0: {
            filter: 'saturate(0)',
        },
        50: {
            filter: 'saturate(.5)',
        },
        75: {
            filter: 'saturate(.75)',
        },
        100: {
            filter: 'saturate(1)',
        },
        150: {
            filter: 'saturate(1.5)',
        },
        200: {
            filter: 'saturate(2)',
        },
    },
    sepia: {
        0: {
            filter: 'sepia(0)',
        },
        1: {
            filter: 'sepia(100%)',
        },
    },
    backdropBlur: {
        none: {
            backdropFilter: 'blur(0)',
        },
        sm: {
            backdropFilter: 'blur(4px)',
        },
        default: {
            backdropFilter: 'blur(8px)',
        },
        md: {
            backdropFilter: 'blur(12px)',
        },
        lg: {
            backdropFilter: 'blur(16px)',
        },
        xl: {
            backdropFilter: 'blur(24px)',
        },
        '2xl': {
            backdropFilter: 'blur(40px)',
        },
        '3xl': {
            backdropFilter: 'blur(64px)',
        },
    },
    backdropBrightness: {
        0: {
            backdropFilter: 'brightness(0)',
        },
        50: {
            backdropFilter: 'brightness(.5)',
        },
        75: {
            backdropFilter: 'brightness(.75)',
        },
        90: {
            backdropFilter: 'brightness(.9)',
        },
        95: {
            backdropFilter: 'brightness(.95)',
        },
        100: {
            backdropFilter: 'brightness(1)',
        },
        105: {
            backdropFilter: 'brightness(1.05)',
        },
        110: {
            backdropFilter: 'brightness(1.1)',
        },
        125: {
            backdropFilter: 'brightness(1.25)',
        },
        150: {
            backdropFilter: 'brightness(1.5)',
        },
        200: {
            backdropFilter: 'brightness(2)',
        },
    },
    backdropContrast: {
        0: {
            backdropFilter: 'contrast(0)',
        },
        50: {
            backdropFilter: 'contrast(.5)',
        },
        75: {
            backdropFilter: 'contrast(.75)',
        },
        100: {
            backdropFilter: 'contrast(1)',
        },
        125: {
            backdropFilter: 'contrast(1.25)',
        },
        150: {
            backdropFilter: 'contrast(1.5)',
        },
        200: {
            backdropFilter: 'contrast(2)',
        },
    },
    backdropGrayscale: {
        0: {
            backdropFilter: 'grayscale(0)',
        },
        1: {
            backdropFilter: 'grayscale(100%)',
        },
    },
    backdropHueRotate: {
        0: {
            backdropFilter: 'hue-rotate(0)',
        },
        15: {
            backdropFilter: 'hue-rotate(15deg)',
        },
        30: {
            backdropFilter: 'hue-rotate(30deg)',
        },
        60: {
            backdropFilter: 'hue-rotate(60deg)',
        },
        90: {
            backdropFilter: 'hue-rotate(90deg)',
        },
        180: {
            backdropFilter: 'hue-rotate(180deg)',
        },
    },
    backdropInvert: {
        0: {
            backdropFilter: 'invert(0)',
        },
        1: {
            backdropFilter: 'invert(100%)',
        },
    },
    backdropOpacity: {
        0: {
            backdropFilter: 'opacity(0)',
        },
        5: {
            backdropFilter: 'opacity(.05)',
        },
        10: {
            backdropFilter: 'opacity(.1)',
        },
        20: {
            backdropFilter: 'opacity(.2)',
        },
        25: {
            backdropFilter: 'opacity(.25)',
        },
        30: {
            backdropFilter: 'opacity(.3)',
        },
        40: {
            backdropFilter: 'opacity(.4)',
        },
        50: {
            backdropFilter: 'opacity(.5)',
        },
        60: {
            backdropFilter: 'opacity(.6)',
        },
        70: {
            backdropFilter: 'opacity(.7)',
        },
        75: {
            backdropFilter: 'opacity(.75)',
        },
        80: {
            backdropFilter: 'opacity(.8)',
        },
        90: {
            backdropFilter: 'opacity(.9)',
        },
        95: {
            backdropFilter: 'opacity(.95)',
        },
        100: {
            backdropFilter: 'opacity(1)',
        },
    },
    backdropSaturate: {
        0: {
            backdropFilter: 'saturate(0)',
        },
        50: {
            backdropFilter: 'saturate(.5)',
        },
        75: {
            backdropFilter: 'saturate(.75)',
        },
        100: {
            backdropFilter: 'saturate(1)',
        },
        150: {
            backdropFilter: 'saturate(1.5)',
        },
        200: {
            backdropFilter: 'saturate(2)',
        },
    },
    backdropSepia: {
        0: {
            backdropFilter: 'sepia(0)',
        },
        1: {
            backdropFilter: 'sepia(100%)',
        },
    },
    resize: {
        none: {
            resize: 'none',
        },
        vertical: {
            resize: 'vertical',
        },
        horizontal: {
            resize: 'horizontal',
        },
        both: {
            resize: 'both',
        },
    },
    transform: {
        uppercase: {
            textTransform: 'uppercase',
        },
        lowercase: {
            textTransform: 'lowercase',
        },
        capitalize: {
            textTransform: 'capitalize',
        },
        normalCase: {
            textTransform: 'none',
        },
    },
    overflow: {
        auto: {
            overflow: 'auto',
        },
        hidden: {
            overflow: 'hidden',
        },
        clip: {
            overflow: 'clip',
        },
        visible: {
            overflow: 'visible',
        },
        scroll: {
            overflow: 'scroll',
        },
        autoX: {
            overflowX: 'auto',
        },
        autoY: {
            overflowY: 'auto',
        },
        hiddenX: {
            overflowX: 'hidden',
        },
        hiddenY: {
            overflowY: 'hidden',
        },
        clipX: {
            overflowX: 'clip',
        },
        clipY: {
            overflowY: 'clip',
        },
        visibleX: {
            overflowX: 'visible',
        },
        visibleY: {
            overflowY: 'visible',
        },
        scrollX: {
            overflowX: 'scroll',
        },
        scrollY: {
            overflowY: 'scroll',
        },
        truncate: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        },
        ellipsis: {
            textOverflow: 'ellipsis',
        },
    },
    clear: {
        left: {
            clear: 'left',
        },
        right: {
            clear: 'right',
        },
        both: {
            clear: 'both',
        },
        none: {
            clear: 'none',
        },
    },
    vAlign: {
        baseline: {
            verticalAlign: 'baseline',
        },
        top: {
            verticalAlign: 'top',
        },
        middle: {
            verticalAlign: 'middle',
        },
        bottom: {
            verticalAlign: 'bottom',
        },
        textTop: {
            verticalAlign: 'text-top',
        },
        textBottom: {
            verticalAlign: 'text-bottom',
        },
        sub: {
            verticalAlign: 'sub',
        },
        super: {
            verticalAlign: 'super',
        },
    },
    whitespace: {
        normal: {
            whiteSpace: 'normal',
        },
        nowrap: {
            whiteSpace: 'nowrap',
        },
        pre: {
            whiteSpace: 'pre',
        },
        preLine: {
            whiteSpace: 'pre-line',
        },
        preWrap: {
            whiteSpace: 'pre-wrap',
        },
    },
    wordBreak: {
        normal: {
            overflowWrap: 'normal',
            wordBreak: 'normal',
        },
        words: {
            overflowWrap: 'break-word',
        },
        all: {
            wordBreak: 'break-all',
        },
        keepAll: {
            wordBreak: 'keep-all',
        },
    },
    fontStyle: {
        italic: {
            fontStyle: 'italic',
        },
        normal: {
            fontStyle: 'normal',
        },
    },
    textAlign: {
        center: {
            textAlign: 'center',
        },
        left: {
            textAlign: 'left',
        },
        right: {
            textAlign: 'right',
        },
    },
    decoration: {
        underline: {
            tdl: 'underline',
        },
        overline: {
            tdl: 'overline',
        },
        lineThrough: {
            tdl: 'line-through',
        },
        noUnderline: {
            tdl: 'none',
        },
    },
    decorationStyle: {
        solid: {
            tds: 'solid',
        },
        double: {
            tds: 'double',
        },
        dotted: {
            tds: 'dotted',
        },
        dashed: {
            tds: 'dashed',
        },
        wavy: {
            tds: 'wavy',
        },
    },
    flex: {
        1: {
            flex: '1 1 0%',
        },
        auto: {
            flex: '1 1 auto',
        },
        initial: {
            flex: '0 1 auto',
        },
        none: {
            flex: 'none',
        },
    },
    grow: {
        grow: {
            flexGrow: '1',
        },
        initial: {
            flexGrow: '0',
        },
    },
    wrap: {
        start: {
            alignItems: 'flex-start',
        },
        center: {
            alignItems: 'center',
        },
        end: {
            alignItems: 'flex-end',
        },
        stretch: {
            alignItems: 'stretch',
        },
    },
    flow: {
        row: {
            flexDirection: 'row',
        },
        column: {
            flexDirection: 'column',
        },
        rowReverse: {
            flexDirection: 'row-reverse',
        },
        columnReverse: {
            flexDirection: 'column-reverse',
        },
        inherit: {
            flexDirection: 'inherit',
        },
        revert: {
            flexDirection: 'revert',
        },
        initial: {
            flexDirection: 'initial',
        },
        unset: {
            flexDirection: 'unset',
        },
    },
    justifyContent: {
        start: {
            justifyContent: 'flex-start',
        },
        center: {
            justifyContent: 'center',
        },
        end: {
            justifyContent: 'flex-end',
        },
        stretch: {
            justifyContent: 'stretch',
        },
        between: {
            justifyContent: 'space-between',
        },
        around: {
            justifyContent: 'space-around',
        },
        evenly: {
            justifyContent: 'space-evenly',
        },
    },
    justifyItems: {
        start: {
            justifyItems: 'start',
        },
        center: {
            justifyItems: 'center',
        },
        end: {
            justifyItems: 'end',
        },
        stretch: {
            justifyItems: 'stretch',
        },
    },
    justifySelf: {
        start: {
            justifySelf: 'start',
        },
        center: {
            justifySelf: 'center',
        },
        end: {
            justifySelf: 'end',
        },
        stretch: {
            justifySelf: 'stretch',
        },
    },
    alignContent: {
        start: {
            contentStart: ' flex-start',
        },
        end: {
            contentEnd: 'flex-end',
        },
        center: {
            contentCenter: 'center',
        },
        between: {
            contentBetween: 'space-between',
        },
        around: {
            contentAround: 'space-around',
        },
        evenly: {
            contentEvenly: 'space-evenly',
        },
    },
    alignItems: {
        start: {
            alignItems: 'flex-start',
        },
        center: {
            alignItems: 'center',
        },
        end: {
            alignItems: 'flex-end',
        },
        stretch: {
            alignItems: 'stretch',
        },
    },
    alignSelf: {
        start: {
            alignSelf: 'flex-start',
        },
        center: {
            alignSelf: 'center',
        },
        end: {
            alignSelf: 'flex-end',
        },
        stretch: {
            alignSelf: 'stretch',
        },
        baseline: {
            alignSelf: 'baseline',
        },
        auto: {
            alignSelf: 'auto',
        },
    },
    placeContent: {
        start: {
            placeContent: 'start',
        },
        end: {
            placeContent: 'end',
        },
        center: {
            placeContent: 'center',
        },
        between: {
            placeContent: 'space-between',
        },
        around: {
            placeContent: 'space-around',
        },
        evenly: {
            placeContent: 'space-evenly',
        },
        stretch: {
            placeContent: 'stretch',
        },
    },
    placeItems: {
        start: {
            placeItems: 'start',
        },
        end: {
            placeItems: 'end',
        },
        center: {
            placeItems: 'center',
        },
        stretch: {
            placeItems: 'stretch',
        },
    },
    placeSelf: {
        start: {
            placeSelf: 'start',
        },
        end: {
            placeSelf: 'end',
        },
        center: {
            placeSelf: 'center',
        },
        stretch: {
            placeSelf: 'stretch',
        },
        auto: {
            placeSelf: 'auto',
        },
    },
    shrink: {
        1: {
            flexShrink: 1,
        },
        0: {
            flexShrink: 0,
        },
    },
    order: {
        1: {
            order: 1,
        },
        2: {
            order: 2,
        },
        3: {
            order: 3,
        },
        4: {
            order: 4,
        },
        5: {
            order: 5,
        },
        6: {
            order: 6,
        },
        7: {
            order: 7,
        },
        8: {
            order: 8,
        },
        9: {
            order: 9,
        },
        10: {
            order: 10,
        },
        11: {
            order: 11,
        },
        12: {
            order: 12,
        },
        first: {
            order: '-9999',
        },
        last: {
            order: '9999',
        },
        none: {
            order: '0',
        },
    },
    position: {
        relative: {
            position: 'relative',
        },
        absolute: {
            position: 'absolute',
        },
        fixed: {
            position: 'fixed',
        },
        sticky: {
            position: 'sticky',
        },
    },
    visible: {
        visible: {
            visibility: 'visible',
        },
        hidden: {
            visibility: 'hidden',
        },
    },
    float: {
        left: {
            float: 'left',
        },
        right: {
            float: 'right',
        },
        none: {
            float: 'none',
        },
    },
    appearance: {
        none: {
            appearance: 'none',
        },
    },
    reset: {
        all: {
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
            border: 0,
            outline: 0,
            background: 'transparent',
            verticalAlign: 'middle',
            boxShadow: 'none',
            appearance: 'none',
        },
        border: {
            border: 0,
            appearance: 'none',
        },
        borderRadius: {
            borderRadius: 0,
            appearance: 'none',
        },
    },
    cursor: {
        auto: {
            cursor: 'auto',
        },
        default: {
            cursor: 'default',
        },
        pointer: {
            cursor: 'pointer',
        },
        wait: {
            cursor: 'wait',
        },
        text: {
            cursor: 'text',
        },
        move: {
            cursor: 'move',
        },
        help: {
            cursor: 'help',
        },
        notAllowed: {
            cursor: 'not-allowed',
        },
        none: {
            cursor: 'none',
        },
        contextMenu: {
            cursor: 'context-menu',
        },
        progress: {
            cursor: 'progress',
        },
        cell: {
            cursor: 'cell',
        },
        crosshair: {
            cursor: 'crosshair',
        },
        verticalText: {
            cursor: 'vertical-text',
        },
        alias: {
            cursor: 'alias',
        },
        copy: {
            cursor: 'copy',
        },
        noDrop: {
            cursor: 'no-drop',
        },
        grap: {
            cursor: 'grab',
        },
        grabbing: {
            cursor: 'grabbing',
        },
        allScroll: {
            cursor: 'all-scroll',
        },
        colResize: {
            cursor: 'col-resize',
        },
        rowResize: {
            cursor: 'row-resize',
        },
        nResize: {
            cursor: 'n-resize',
        },
        eResize: {
            cursor: 'e-resize',
        },
        sResize: {
            cursor: 's-resize',
        },
        wResize: {
            cursor: 'w-resize',
        },
        neResize: {
            cursor: 'ne-resize',
        },
        nwResize: {
            cursor: 'nw-resize',
        },
        seResize: {
            cursor: 'se-resize',
        },
        swResize: {
            cursor: 'sw-resize',
        },
        ewResize: {
            cursor: 'ew-resize',
        },
        nsResize: {
            cursor: 'ns-resize',
        },
        neswResize: {
            cursor: 'nesw-resize',
        },
        nwseResize: {
            cursor: 'nwse-resize',
        },
        zoomIn: {
            cursor: 'zoom-in',
        },
        zoomOut: {
            cursor: 'zoom-out',
        },
    },
    // ---
    left: variant('space', 'left'),
    right: variant('space', 'right'),
    top: variant('space', 'top'),
    bottom: variant('space', 'bottom'),
    // ---
    borderStyle: variant('borderStyles', 'borderStyle'),
    borderWidth: variant('borderWidths', 'bw'),
    borderColor: variant('colors', 'bc'),
    hoverBorderColor: variant('colors', 'hbc'),
    focusBorderColor: variant('colors', 'fbc'),
    // ---
    p: variant('space', 'p'),
    pl: variant('space', 'pl'),
    pr: variant('space', 'pr'),
    pt: variant('space', 'pt'),
    pb: variant('space', 'pb'),
    px: variant('space', 'px'),
    py: variant('space', 'py'),
    m: variant('space', 'm'),
    ml: variant('space', 'ml'),
    mr: variant('space', 'mr'),
    mt: variant('space', 'mt'),
    mb: variant('space', 'mb'),
    mx: variant('space', 'mx'),
    my: variant('space', 'my'),
    // ---
    width: variant('sizes', 'width'),
    minWidth: variant('sizes', 'minWidth'),
    maxWidth: variant('sizes', 'maxWidth'),
    height: variant('sizes', 'height'),
    minHeight: variant('sizes', 'minHeight'),
    maxHeight: variant('sizes', 'maxHeight'),
    boxSize: variant('sizes', 'boxSize'),
    // ---
    zIndex: variant('zIndices', 'fbgc'),
    radius: variant('radii', 'br'),
    // ---
    bgColor: variant('colors', 'bgc'),
    hoverBgColor: variant('colors', 'hbgc'),
    focusBgColor: variant('colors', 'fbgc'),
    disabledBorderColor: variant('colors', 'dbc'),
    disabledBgColor: variant('colors', 'dbgc'),
    fontWeight: variant('fontWeights', 'fontWeight'),
    // ---
    color: variant('colors', 'color'),
    hoverColor: variant('colors', 'htc'),
    focusColor: variant('colors', 'ftc'),
    disabledColor: variant('colors', 'dtc'),
    // ---
    gap: variant('space', 'g'),
    xgap: variant('space', 'gx'),
    ygap: variant('space', 'gy'),
    // ---
    decorationColor: variant('colors', ' tdc'),
    decorationThickness: variant('borderWidths', ' tdt'),
    fontSize: variant('fontSizes', 'fontSize'),
    lineHeight: variant('lineHeights', 'lineHeight'),
    letterSpacing: variant('letterSpacings', 'letterSpacing'),
    family: variant('fonts', 'fontFamily'),
    outlineColor: variant('colors', 'outlineColor'),
}

export default variants

//
// END
//
