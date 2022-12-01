/** Spacing */
const _fractions = {
    '1/10': '10%',
    '1/5': '20%',
    '1/6': '30%',
    '1/5': '40%',
    '1/2': '50%',
    '3/5': '60%',
    '7/10': '70%',
    '4/5': '80%',
    '9/10': '90%',
    '1/4': '25%',
    '1/3': '33.3%',
    '2/3': '66.6%',
};
const _values = {
    '0': '0rem',
    'px': '1px',
    '1': '1px',
    '2': '2px',
    '4': '4px',
    '5': '0.5rem',
    '6': '0.rem',
    '8': '0.8rem',
    '10': '1rem',
    '15': '1.5rem',
    '18': '1.8rem',
    '20': '2rem',
    '24': '2.4rem',
    '25': '2.5rem',
    '28': '2.8rem',
    '30': '3rem',
    '32': '3.2rem',
    '34': '3.4rem',
    '36': '3.6rem',
    '40': '4rem',
    '42': '4.2rem',
    '48': '4.8rem',
    '50': '5rem',
    '58': '5.8rem',
    '60': '6rem',
    '64': '6.4rem',
    '72': '7.2rem',
    '80': '8rem',
    '96': '9.6rem',
    '100': '10rem',
    '120': '12rem',
    '128': '12.8rem',
    '150': '15rem',
    '192': '19.2rem',
    '200': '20rem',
    '220': '22rem',
    '256': '25.6rem',
    '300': '30rem',
    '280': '28rem',
    '320': '32rem',
    '350': '35rem',
    '360': '36rem',
    '384': '38.4rem',
    '400': '40rem',
    '460': '46rem',
    '500': '50rem',
    '512': '51.2rem',
    '640': '64rem',
    '720': '72rem',
    '840': '84rem',
    '960': '96rem',
    '1280': '128rem',
    '1440': '144rem',
    '1920': '192rem',
};
const spacing = {
    ..._fractions,
    ..._values,
};

/** Shadows */
const boxShadow = {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0px 3px 5px -1px rgb(0 0 0 / 10%), 0px 6px 10px 0px rgb(0 0 0 / 6%), 0px 1px 18px 0px rgb(0 0 0 / 4%)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
};

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
        extend: {
            maxWidth: spacing,
            minWidth: spacing,
            maxHeight: spacing,
            minHeight: spacing,
        },
        screens: screens,
        spacing: spacing,
        borderRadius: border.borderRadius,
        boxShadow: boxShadow,
    },
    presets: [
        require('./presets/colors.preset'),
        require('./presets/typography.preset'),
    ]
};
