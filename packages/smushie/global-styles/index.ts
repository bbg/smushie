//
// Smushie -> Global Styles
// ...
//

import { globalCss } from '../stitches'

const globalStyles = globalCss({
    '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
        fontSize: '100%',
        lineHeight: '100%',
        outline: 'none',
        fontFamily: '$sans',
    },
    html: {
        fontSize: '16px',
    },
    body: {
        margin: 0,
        padding: 0,
        fontFamily: '$system',
    },
})

export default globalStyles

//
// END
//
