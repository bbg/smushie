//
// Smushie -> Stitches Utils
// ...
//

const padding = {
    p: (value: string) => ({ padding: value }),
    pt: (value: string) => ({ paddingTop: value }),
    pr: (value: string) => ({ paddingRight: value }),
    pb: (value: string) => ({ paddingBottom: value }),
    pl: (value: string) => ({ paddingLeft: value }),
    px: (value: string) => ({ pl: value, pr: value }),
    py: (value: string) => ({ pt: value, pb: value }),
}

const margin = {
    m: (value: string) => ({ margin: value }),
    mt: (value: string) => ({ marginTop: value }),
    mr: (value: string) => ({ marginRight: value }),
    mb: (value: string) => ({ marginBottom: value }),
    ml: (value: string) => ({ marginLeft: value }),
    mx: (value: string) => ({ ml: value, mr: value }),
    my: (value: string) => ({ mt: value, mb: value }),
}

const border = {
    bw: (value: string) => ({ borderWidth: value }),
    blw: (value: string) => ({ borderLeftWidth: value }),
    brw: (value: string) => ({ borderRightWidth: value }),
    btw: (value: string) => ({ borderTopWidth: value }),
    bbw: (value: string) => ({ borderBottomWidth: value }),
    bwx: (value: string) => ({ blw: value, brw: value }),
    bwy: (value: string) => ({ btw: value, bbw: value }),
    bs: (value: string) => ({ borderStyle: value }),
    bsl: (value: string) => ({ borderLeftStyle: value }),
    bsr: (value: string) => ({ borderRightStyle: value }),
    bst: (value: string) => ({ borderTopStyle: value }),
    bsb: (value: string) => ({ borderBottomStyle: value }),
    bsx: (value: string) => ({ bsl: value, bsr: value }),
    bsy: (value: string) => ({ bst: value, bsb: value }),
    br: (value: string) => ({ borderRadius: value }),
    bc: (value: string) => ({ borderColor: value }),
    hbc: (value: string) => ({ '&:hover': { borderColor: value } }),
    fbc: (value: string) => ({ '&:focus': { borderColor: value } }),
    dbc: (value: string) => ({ '&:disabled': { borderColor: value } }),
}

const gap = {
    g: (value: string) => ({ gap: value }),
    gy: (value: string) => ({ rowGap: value }),
    gx: (value: string) => ({ columnGap: value }),
}

const other = {
    bsh: (value: string) => ({ boxShadow: value }),
    lh: (value: string) => ({ lineHeight: value }),
    lg: (value: string) => ({ backgroundImage: `linear-gradient(${value})` }),
    boxSize: (value: string) => ({ width: value, height: value }),
}

const radius = {
    br: (value: string) => ({ borderRadius: value }),
}

const size = {
    w: (value: string) => ({ width: value }),
    h: (value: string) => ({ height: value }),
    mxw: (value: string) => ({ maxWidth: value }),
    mnw: (value: string) => ({ minWidth: value }),
    mxh: (value: string) => ({ maxHeight: value }),
    mnh: (value: string) => ({ minHeight: value }),
}

const color = {
    bgc: (value: string) => ({ backgroundColor: value }),
    hbgc: (value: string) => ({ '&:hover': { backgroundColor: value } }),
    fbgc: (value: string) => ({ '&:focus': { backgroundColor: value } }),
    dbgc: (value: string) => ({ '&:disabled': { backgroundColor: value } }),
    tc: (value: string) => ({ color: value }),
    htc: (value: string) => ({ '&:hover': { color: value } }),
    ftc: (value: string) => ({ '&:focus': { color: value } }),
    dtc: (value: string) => ({ '&:disabled': { color: value } }),
}

const typography = {
    tdl: (value: string) => ({ textDecorationLine: value }),
    tdc: (value: string) => ({ textDecorationColor: value }),
    tdt: (value: string) => ({ textDecorationThickness: value }),
    tds: (value: string) => ({ textDecorationStyle: value }),
}

const transition = {
    tnProperty: (value: string) => ({ transitionProperty: value }),
    tnFunction: (value: string) => ({ transitionTimingFunction: value }),
    tnDuration: (value: string) => ({ transitionDuration: value }),
    tnDelay: (value: string) => ({ transitionDelay: value }),
    tnICount: (value: string | number) => ({ transitionIterationCount: value }),
    tnt: (value: string) => ({ transitionTiming: value }),
}

type TSelector = Record<string, string>
type TSelectorInSelector = Record<string, string | TSelector>

const selector = {
    hover: (value: TSelector) => ({ '&:hover': value }),
    focus: (value: TSelector) => ({ '&:focus': value }),
    svg: (value: TSelector) => ({ '& > svg': value }),
    image: (value: TSelectorInSelector) => ({ '& > img': value }),
    disabled: (value: TSelectorInSelector) => ({ '&:disabled': value }),
    placeholder: (value: TSelector) => ({ '::placeholder': value }),
}

const utils = {
    ...padding,
    ...margin,
    ...selector,
    ...border,
    ...gap,
    ...color,
    ...other,
    ...size,
    ...radius,
    ...typography,
    ...transition,
}

export default utils

//
// END
//
