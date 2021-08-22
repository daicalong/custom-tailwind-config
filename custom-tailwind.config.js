
const colors = require('./const.colors');
const spacing = require('./const.spacing');
const typography = require('./const.typography');

const boxShadow = require('./const.shadows');
module.exports = {
    prefix: '',
    purge: {
        enabled: true,
        content: [
            './src/**/*.{html,ts}',
        ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            maxWidth: spacing,
            minWidth: spacing,
            maxHeight: spacing,
            minHeight: spacing,
            brightness: {
                '500': '5',
            }
        },
        screens: {
            'xs': '360px',
            'sm': '960px',
            'md': '1280px',
            'lg': '1440px',
            'xl': '1920px'
        },
        spacing: spacing,
        colors: colors,
        borderRadius: {
            'none': '0px',
            'sm': '4px',
            DEFAULT: '6px',
            'lg': '12px',
            'xl': '16px',
            full: '9999px',
        },
        boxShadow: boxShadow,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize,
    },
    variants: {
        extend: {
            borderWidth: ['dark'],
            borderStyle: ['dark'],
            boxShadow: ['dark'],
            filter: ['dark'],
            brightness: ['dark'],
            grayscale: ['dark'],
            transform: ['group-hover'],
            scale: ['group-hover']
        },
    },
};
