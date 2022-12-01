const shadow = require('./presets/shadow.preset');
const spacing = require('./presets/spacing.preset');
const screens = require('./presets/screens.preset');
const border = require('./presets/border.preset');

module.exports = {
    important: true, //This allows TailwindCSS classes to take priority over other 3rd-party CSS
    prefix: '',
    content: [
        './src/**/*.{html,ts,js}',
    ],
    theme: {
    },
    presets: [
        shadow,
        spacing,
        border,
        screens,
        require('./presets/colors.preset'),
        require('./presets/typography.preset'),
    ]
};
