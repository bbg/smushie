//
// Smushie -> Container Styled Component
// ...
//

import { memo } from 'react'
import { css, styled } from '../stitches'
import variants from '../variants'

const { m, ml, mr, mt, mb, mx, my, p, pl, pr, pt, pb, px, py } = variants

const styles = css({
    variants: {
        width: {
            fluid: {
                width: '100%',
            },
            screen: {
                width: '100vw',
            },
            content: {
                width: 'max-content',
            },
            sm: {
                width: '640px',
            },
            md: {
                width: '768px',
            },
            lg: {
                width: '1024px',
            },
            xl: {
                width: '1280px',
            },
            xxl: {
                width: '1536px',
            },
        },
        maxWidth: {
            fluid: {
                maxWidth: '100%',
            },
            screen: {
                maxWidth: '100vw',
            },
            content: {
                maxWidth: 'max-content',
            },
            sm: {
                maxWidth: '640px',
            },
            md: {
                maxWidth: '768px',
            },
            lg: {
                maxWidth: '1024px',
            },
            xl: {
                maxWidth: '1280px',
            },
            xxl: {
                maxWidth: '1536px',
            },
        },
        minWidth: {
            fluid: {
                minWidth: '100%',
            },
            screen: {
                minWidth: '100vw',
            },
            content: {
                minWidth: 'max-content',
            },
            sm: {
                minWidth: '640px',
            },
            md: {
                minWidth: '768px',
            },
            lg: {
                minWidth: '1024px',
            },
            xl: {
                minWidth: '1280px',
            },
            xxl: {
                minWidth: '1536px',
            },
        },
        height: {
            screen: {
                height: '100vh',
            },
            auto: {
                height: 'auto',
            },
            content: {
                height: 'max-content',
            },
        },
        minHeight: {
            screen: {
                minHeight: '100vh',
            },
            auto: {
                minHeight: 'auto',
            },
            content: {
                minHeight: 'max-content',
            },
        },
        maxHeight: {
            screen: {
                maxHeight: '100vh',
            },
            auto: {
                maxHeight: 'auto',
            },
            content: {
                maxHeight: 'max-content',
            },
        },
        align: {
            xauto: {
                margin: '0 auto',
            },
        },
        m,
        ml,
        mr,
        mt,
        mb,
        mx,
        my,
        p,
        pl,
        pr,
        pt,
        pb,
        px,
        py,
    },
    defaultVariants: {
        width: 'xxl',
        align: 'xauto',
    },
})

const Container = memo(styled('div', styles))

export default Container

//
// END
//
