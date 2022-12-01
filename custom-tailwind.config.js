const shadow = require('./presets/shadow.preset');
const spacing = require('./presets/spacing.preset');

/** Screen Sizes */
const screens = {
    '2xs': '320px',
    'xs': '600px',
    'sm': '960px',
    'md': '1280px',
    'lg': '1440px',
    'xl': '1920px',
    '2xl': '2560px',
    'phone': '600px',
    'tablet': '960px',
    'laptop': '1440px',
    'desktop': '1920px',
    '2k': '2560px',
    '4k': '3840px',
    'portrait': {
        'raw': '(orientation: portrait)',
    },
    'landscape': {
        'raw': '(orientation: landscape)',
    }
};

/** Border */
const border = {
    borderRadius: {
        'none': '0px',
        'sm': '2px',
        DEFAULT: '4px',
        'lg': '8px',
        'xl': '16px',
        full: '9999px',
    },
}

module.exports = {
    important: true, //This allows TailwindCSS classes to take priority over other 3rd-party CSS
    prefix: '',
    content: [
        './src/**/*.{html,ts,js}',
    ],
    theme: {
        screens: screens,
        borderRadius: border.borderRadius,
    },
    presets: [
        shadow,
        spacing,
        require('./presets/colors.preset'),
        require('./presets/typography.preset'),
    ]
};
