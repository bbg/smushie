//
// Smushie -> Elements
//
// In the block component, flex, section, main, article, header,
// footer, nav, acid, list, item components are available.
// All these components look at the common style.
// It can use the relevant component according to the desired HTML tag.
//

import { memo } from 'react'
import { css, styled } from '../stitches'
import variants from '../variants'

const styles = css({ variants })

export const Block = memo(styled('div', styles))
export const Flex = memo(styled('div', styles, { display: 'flex' }))
export const Grid = memo(styled('div', styles, { display: 'grid' }))
export const Section = memo(styled('section', styles))
export const Main = memo(styled('main', styles))
export const Article = memo(styled('article', styles))
export const Header = memo(styled('header', styles))
export const Footer = memo(styled('footer', styles))
export const Nav = memo(styled('nav', styles))
export const Aside = memo(styled('aside', styles))
export const List = memo(styled('ul', styles))
export const Item = memo(styled('li', styles))
export const Form = memo(styled('form', styles))
export const Fieldset = memo(styled('fieldset', styles))
export const Legend = memo(styled('legend', styles))
export const Label = memo(styled('label', styles))
export const Button = memo(styled('button', styles))
export const Filter = memo(styled('div', styles))
export const Input = memo(styled('input', styles))
export const Textarea = memo(styled('textarea', styles))

// Typography
export const Text = styled('span', styles)
export const Quote = styled('q', styles)
export const Span = memo(styled('span', styles))
export const P = memo(styled('p', styles))
export const Small = memo(styled('small', styles))
export const Del = memo(styled('del', styles))
export const H1 = memo(styled('h1', styles))
export const H2 = memo(styled('h2', styles))
export const H3 = memo(styled('h3', styles))
export const H4 = memo(styled('h4', styles))
export const H5 = memo(styled('h5', styles))
export const H6 = memo(styled('h6', styles))

// declare additional styles where necessary
export const Ins = memo(styled('ins', styles, { textDecoration: 'none' }))
export const Em = memo(styled('em', styles, { fontStyle: 'italic' }))
export const Strong = memo(styled('strong', styles, { fontWeight: 'bold' }))
export const Mark = memo(styled('mark', styles, { bgColor: '$yellow-300' }))
export const A = memo(styled('a', styles))

//
// END
//
