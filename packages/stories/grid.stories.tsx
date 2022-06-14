//
// Grid Component Stories
// ...
//

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Container, Grid, Flex } from '../smushie'

export default {
    title: 'Smushie/Grid',
    component: Grid,
    argTypes: {
        columns: {
            name: 'Columns',
            description: 'Number of columns',
            options: [
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
                '11',
                '12',
            ],
            control: {
                type: 'select',
            },
        },
        gap: {
            name: 'Gap',
            description: 'Gap between columns',
            defaultValue: '0',
            control: {
                type: 'text',
            },
        },
    },
} as ComponentMeta<typeof Grid>

const Template: ComponentStory<typeof Grid> = (args) => (
    <Container
        width={{
            '@initial': 'xxl',
            '@sm': 'sm',
            '@md': 'md',
            '@lg': 'lg',
            '@xl': 'xl',
            '@xxl': 'xxl',
        }}
        align="xauto"
    >
        <Grid {...args}>
            {Array.from(Array(12), (_e, i) => {
                return (
                    <Flex
                        bgColor="gray-200"
                        p="3"
                        radius="md"
                        alignItems="center"
                        justifyContent="center"
                        key={i}
                    >
                        {i + 1}
                    </Flex>
                )
            })}
        </Grid>
    </Container>
)

export const Default = Template.bind({})

Default.args = {
    columns: '12',
    gap: '5',
}

//
// END
//
