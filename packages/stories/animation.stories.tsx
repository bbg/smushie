//
// Animation Stories
// ...
//

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Block, Text, animations } from '../smushie'

export default {
    title: 'Smushie/Animation',
    component: Block,
    argTypes: {
        animationName: {
            name: 'Animation Name',
            description: 'The animation to use',
            defaultValue: 'jello',
            options: [
                'bounce',
                'flash',
                'headShake',
                'heartBeat',
                'jello',
                'pulse',
                'rubberBand',
                'shake',
                'shakeX',
                'shakeY',
                'swing',
                'tada',
                'wobble',
                'backInDown',
                'backInLeft',
                'backInRight',
                'backInUp',
                'backOutDown',
                'backOutLeft',
                'backOutRight',
                'backOutUp',
                'bounceIn',
                'bounceInDown',
                'bounceInLeft',
                'bounceInRight',
                'bounceInUp',
                'bounceOut',
                'bounceOutDown',
                'bounceOutLeft',
                'bounceOutRight',
                'bounceOutUp',
                'fadeIn',
                'fadeInBottomLeft',
                'fadeInBottomRight',
                'fadeInDown',
                'fadeInDownBig',
                'fadeInLeft',
                'fadeInLeftBig',
                'fadeInRight',
                'fadeInRightBig',
                'fadeInTopLeft',
                'fadeInTopRight',
                'fadeInUp',
                'fadeInUpBig',
                'fadeOut',
                'fadeOutBottomLeft',
                'fadeOutBottomRight',
                'fadeOutDown',
                'fadeOutDownBig',
                'fadeOutLeft',
                'fadeOutLeftBig',
                'fadeOutRight',
                'fadeOutRightBig',
                'fadeOutTopLeft',
                'fadeOutTopRight',
                'fadeOutUp',
                'fadeOutUpBig',
                'flip',
                'flipInX',
                'flipInY',
                'flipOutX',
                'flipOutY',
                'lightSpeedInLeft',
                'lightSpeedInRight',
                'lightSpeedOutLeft',
                'lightSpeedOutRight',
                'rotateIn',
                'rotateInDownLeft',
                'rotateInDownRight',
                'rotateInUpLeft',
                'rotateInUpRight',
                'rotateOut',
                'rotateOutDownLeft',
                'rotateOutDownRight',
                'rotateOutUpLeft',
                'rotateOutUpRight',
                'slideInDown',
                'slideInLeft',
                'slideInRight',
                'slideInUp',
                'slideOutDown',
                'slideOutLeft',
                'slideOutRight',
                'slideOutUp',
                'rollIn',
                'rollOut',
                'hinge',
                'jackInTheBox',
                'zoomIn',
                'zoomInDown',
                'zoomInLeft',
                'zoomInRight',
                'zoomInUp',
                'zoomOut',
                'zoomOutDown',
                'zoomOutLeft',
                'zoomOutRight',
                'zoomOutUp',
            ],
            control: {
                type: 'select',
            },
        },
        animationDuration: {
            name: 'Animation Duration',
            description: 'The duration of the animation',
            defaultValue: '1s',
            options: [
                '75',
                '100',
                '150',
                '200',
                '300',
                '400',
                '500',
                '700',
                '1000',
            ],
            control: {
                type: 'select',
            },
        },
        animationTimingFunction: {
            name: 'Animation Timing Function',
            description: 'The timing function of the animation',
            defaultValue: 'easeLinear',
            options: ['easeLinear', 'easeIn', 'easeOut', 'easeInOut'],
            control: {
                type: 'select',
            },
        },
        animationIterationCount: {
            name: 'Animation Iteration Count',
            description: 'The number of times to repeat the animation',
            defaultValue: 'infinite',
            options: [
                'infinite',
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '20',
                '30',
                '40',
                '50',
                '60',
                '70',
                '80',
                '90',
                '100',
            ],
            control: {
                type: 'select',
            },
        },
    },
} as ComponentMeta<typeof Block>

type AnimationType<T> = T & {
    animationDuration: string
    animationIterationCount: string
    animationName: string
}

const Template: ComponentStory<AnimationType<typeof Block>> = (args) => {
    return (
        <Block
            borderColor="blue-200"
            borderStyle="solid"
            borderWidth="5"
            bgColor="blue-500"
            p="5"
            boxSize="28"
            animationDuration={args.animationDuration}
            animationIterationCount={args.animationIterationCount}
            animationTimingFunction={args.animationTimingFunction}
            css={{
                animationName: `${animations[args.animationName]}`,
            }}
        >
            <Text color="white">{args.animationName}</Text>
        </Block>
    )
}

export const Default = Template.bind({})

//
// END
//
