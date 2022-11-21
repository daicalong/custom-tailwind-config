
const colors = require('./const.colors');
const spacing = require('./const.spacing');
const typography = require('./const.typography');
const boxShadow = require('./const.shadows');
const screens = require('./const.screens');
const border = require('./const.border');

module.exports = {
    important: true, //This allows TailwindCSS classes to take priority over other 3rd-party CSS
    prefix: '',
    content: [
        './src/**/*.{html,ts,js}',
    ],
    theme: {
        extend: {
            maxWidth: spacing,
            minWidth: spacing,
            maxHeight: spacing,
            minHeight: spacing,
            fill: colors,
        },
        screens: screens,
        spacing: spacing,
        colors: colors,
        borderRadius: border.borderRadius,
        boxShadow: boxShadow,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize,
        letterSpacing: typography.letterSpacing,
    },
};
