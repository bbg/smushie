//
// Filter Component Stories
// ...
//

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Filter } from '../smushie'

const img =
    'https://images.unsplash.com/photo-1655071515655-8bc029cf2a5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2969&q=80'

export default {
    title: 'Smushie/Filter',
    component: Filter,
    argTypes: {
        grayscale: {
            name: 'Grayscale',
            description: 'Whether the image should be grayscale',
            control: {
                type: 'text',
            },
        },
        contrast: {
            name: 'Contrast',
            description: 'Whether the image should be in a higher contrast',
            control: {
                type: 'text',
            },
        },
        invert: {
            name: 'Invert',
            description: 'Whether the image should be inverted',
            control: {
                type: 'text',
            },
        },
    },
} as ComponentMeta<typeof Filter>

const Template: ComponentStory<typeof Filter> = (args) => (
    <Filter {...args}>{args.children}</Filter>
)

export const Grayscale = Template.bind({})
export const Contrast = Template.bind({})
export const Invert = Template.bind({})

Grayscale.args = {
    children: <img src={img} />,
    grayscale: '1',
    width: '96',
    height: '96',
    overflow: 'hidden',
    css: {
        '& img': {
            width: '100%',
        },
    },
}

Contrast.args = {
    children: <img src={img} />,
    contrast: '50',
    width: '96',
    height: '96',
    overflow: 'hidden',
    css: {
        '& img': {
            width: '100%',
        },
    },
}

Invert.args = {
    children: <img src={img} />,
    invert: '1',
    width: '96',
    height: '96',
    overflow: 'hidden',
    css: {
        '& img': {
            width: '100%',
        },
    },
}

//
// END
//
