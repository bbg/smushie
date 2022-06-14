//
// Smushie -> Scale Variant
// ...
//

import { Prefixed } from '@stitches/react/types/util'
import { CSS, theme } from '../stitches'

type Theme = typeof theme
type ThemePrefixed<P extends keyof Theme> = Prefixed<'$', keyof Theme[P]>

function scaleVariant<P extends keyof Theme>(
    prop: P,
    map: (token: ThemePrefixed<P>) => CSS
): Record<keyof Theme[P], CSS> {
    const tokens = Object.keys(theme[prop]) as P[]
    const current = {} as Record<keyof Theme[P], CSS>
    return tokens.reduce(
        (acc, key) => ({ ...acc, [key]: map(`$${key}` as ThemePrefixed<P>) }),
        current
    )
}

function variant<P extends keyof Theme>(name: P, property: string) {
    return scaleVariant(name, (token) => ({ [property]: token }))
}

export default variant

//
// END
//
