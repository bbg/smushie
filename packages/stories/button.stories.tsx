//
// Button Stories
// ...
//

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '../smushie'

export default {
    title: 'Smushie/Button',
    component: Button,
    argTypes: {
        children: {
            name: 'Label',
            description: 'Button Label',
            control: {
                type: 'text',
            },
        },
        bgColor: {
            name: 'Background Color',
            description: 'Background color of the button',
            control: {
                type: 'text',
            },
        },
        hoverBgColor: {
            name: 'Hover Background Color',
            description: 'Background color of the button when hovered',
            control: {
                type: 'text',
            },
        },
        color: {
            name: 'Color',
            description: 'Color of the button',
            control: {
                type: 'text',
            },
        },
        p: {
            name: 'Padding',
            description: 'Padding of the button',
            defaultValue: '0',
            control: {
                type: 'text',
            },
        },
        pt: {
            name: 'Padding Top',
            description: 'Padding Top of the button',
            control: {
                type: 'text',
            },
        },
        pb: {
            name: 'Padding Bottom',
            description: 'Padding Bottom of the button',
            control: {
                type: 'text',
            },
        },
        pl: {
            name: 'Padding Left',
            description: 'Padding Left of the button',
            control: {
                type: 'text',
            },
        },
        pr: {
            name: 'Padding Right',
            description: 'Padding Right of the button',
            control: {
                type: 'text',
            },
        },
        height: {
            name: 'Height',
            description: 'Height of the button',
            control: {
                type: 'text',
            },
        },
        radius: {
            name: 'Radius',
            description: 'Radius of the button',
            control: {
                type: 'text',
            },
        },
        borderColor: {
            name: 'Border Color',
            description: 'Border color of the button',
            control: {
                type: 'text',
            },
        },
        hoverBorderColor: {
            name: 'Hover Border Color',
            description: 'Border color of the button when hovered',
            control: {
                type: 'text',
            },
        },
        borderWidth: {
            name: 'Border Width',
            description: 'Border width of the button',
            control: {
                type: 'text',
            },
        },
        borderStyle: {
            name: 'Border Style',
            description: 'Border style of the button',
            control: {
                type: 'text',
            },
        },
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>{args.children}</Button>
)

export const Primary = Template.bind({})
export const Ghost = Template.bind({})

Primary.args = {
    children: 'Click Me',
    bgColor: 'blue-500',
    hoverBgColor: 'blue-600',
    color: 'white',
    pl: '5',
    pr: '5',
    height: '12',
    radius: 'md',
    transitionProperty: 'backgroundColor',
    transitionDuration: '200',
    transitionTimingFunction: 'easeLinear',
    reset: 'border',
}

Ghost.args = {
    children: 'Click Me',
    borderColor: 'gray-300',
    hoverBorderColor: 'blue-400',
    borderWidth: '2',
    borderStyle: 'solid',
    color: 'gray-500',
    hoverColor: 'gray-900',
    pl: '5',
    pr: '5',
    height: '12',
    radius: 'md',
    transitionProperty: 'all',
    transitionDuration: '300',
    transitionTimingFunction: 'easeLinear',
    reset: 'border',
}

//
// END
//
