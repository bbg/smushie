//
// Storybook Main Configuration
// ...
//

module.exports = {
    "stories": [
        "../packages/stories/**/*.stories.mdx",
        "../packages/stories/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-controls"
    ],
    "framework": "@storybook/react"
}

//
// END
//
