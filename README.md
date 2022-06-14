# Smushie

UI components with ready-made style props for React

Write once, run everywhere without downsides thanks to an optimizing compiler. The structure is built on Stitches.

### All-in-one

**Rapidly iterate on true apps.**

-   **Easy to adopt:** Works with React. Use it as a style props based or full component UI kit.
-   **Productive:** Typed inline styles without performance downside with themes, tokens, shorthands, media queries, and animations.
-   **Fast, all ways:** Save time writing code - write inline styles without performance downside, even with conditional logic.
-   **SSR:** Cross-browser server-side rendering, even for responsive styles and variants out of the box.
-   **CSS:** Customize styles inline with the css prop

### Propful

-   Pseudo styles - Style hover, press, and focus, in combination with media queries.
-   Media queries - For every style/variant.
-   Animations - Animate every component, enter and exit styling, works with psuedo states.
-   DOM escape hatches - Support for className and other HTML attributes.

### Example usage

```jsx
<Container>
    <Flex
        flow="column"
        alignItems="center"
        p="5"
        borderStyle="solid"
        borderWidth="1"
        borderColor="gray-500"
        radius="md"
    >
        <Text
            size="2xl"
            weight="bold"
        >
            Content Here
        </Text>
    </Flex>
</Container>
```

### Example for ready-to-use animations

```jsx
import { animations } from 'Smushie'

<Block
    borderColor="blue-500"
    borderStyle="solid"
    borderWidth="5"
    bgColor="blue-100"
    p="5"
    animationDuration="1s"
    animationIterationCount="infinite"
    animationTimingFunction="ease-in-out"
    css={{
        animationName: 'backOutDown',
    }}
>
    <Text color="white">Back Out Down Animation</Text>
</Block>
```
