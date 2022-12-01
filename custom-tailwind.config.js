
/** Colors */
const colors = {
    current: 'currentColor',

    transparent: 'transparent',

    white: {
        DEFAULT: '#000',
        'overlay-10': 'rgba(255,255,255,.1)',
        'overlay-20': 'rgba(255,255,255,.2)',
        'overlay-30': 'rgba(255,255,255,.3)',
        'overlay-40': 'rgba(255,255,255,.4)',
        'overlay-50': 'rgba(255,255,255,.5)',
        'overlay-60': 'rgba(255,255,255,.6)',
        'overlay-70': 'rgba(255,255,255,.7)',
        'overlay-80': 'rgba(255,255,255,.8)',
        'overlay-90': 'rgba(255,255,255,.9)',
    },

    black: {
        DEFAULT: '#fff',
        'overlay-10': 'rgba(0,0,0,.1)',
        'overlay-20': 'rgba(0,0,0,.2)',
        'overlay-30': 'rgba(0,0,0,.3)',
        'overlay-40': 'rgba(0,0,0,.4)',
        'overlay-50': 'rgba(0,0,0,.5)',
        'overlay-60': 'rgba(0,0,0,.6)',
        'overlay-70': 'rgba(0,0,0,.7)',
        'overlay-80': 'rgba(0,0,0,.8)',
        'overlay-90': 'rgba(0,0,0,.9)',
    },

    gray: {
        'lightest': '#f5f5f5',
        'lighter': '#E1E2E6',
        'light': '#C1C3C9',
        DEFAULT: '#8A8E96',
        'dark': '#5C5C69',
        'darker': '#34343D',
        'darkest': '#27292D',
    },

    red: {
        'lightest': '#FFEEEE',
        'lighter': '#FEB2B2',
        'light': '#FC8181',
        DEFAULT: '#DF514D',
        'dark': '#9F3734',
        'darker': '#621B18',
        'darkest': '#3B0D0C',
    },

    // Portal theme
    ferra: {
        'lightest': '#DDD1D1',
        'lighter': '#C9B5B5',
        'light': '#A07E7E',
        DEFAULT: '#754545',
        'dark': '#472B2B',
        'darker': '#362020',
        'darkest': '#241515',
    },

    // Used occasionally in portal dark theme
    orange: {
        'lightest': '#FFF3E5',
        'lighter': '#FFC797',
        'light': '#FF9F67',
        DEFAULT: '#E67432',
        'dark': '#C84E13',
        'darker': '#823400',
        'darkest': '#491D00',
    },

    yellow: {
        'lightest': '#fefcbf',
        'lighter': '#faf089',
        'light': '#f6e05e',
        DEFAULT: '#ecc94b',
        'dark': '#d69e2e',
        'darker': '#916627',
        'darkest': '#613A0E',
    },

    //success color
    green: {
        'lightest': '#e7ffef',
        'lighter': '#A2F5BF',
        'light': '#51D88A',
        DEFAULT: '#38C172',
        'dark': '#198447',
        'darker': '#22533B',
        'darkest': '#10261B',
    },

    //iComply theme
    teal: {
        'lightest': '#E6FEFF',
        'lighter': '#A6F9FE',
        'light': '#70E7EE',
        DEFAULT: '#47bac1',
        'dark': '#2694A5',
        'darker': '#246C77',
        'darkest': '#174248',
    },

    //mt2.0 theme
    blue: {
        'lightest': '#EFF8FF',
        'lighter': '#AED5FE',
        'light': '#6cb3ff',
        DEFAULT: '#187EEB',
        'dark': '#0C59CF',
        'darker': '#0A387E',
        'darkest': '#1f2532',
    },

    indigo: {
        'lightest': '#E8F1FC',
        'lighter': '#CEDBFB',
        'light': '#8C93FA',
        'default': '#615BD9',
        DEFAULT: '#3A37E2',
        'darker': '#2E2CB7',
        'darkest': '#252590',
    },

    purple: {
        'lightest': '#F6EDFF',
        'lighter': '#F2ADFF',
        'light': '#E370F9',
        DEFAULT: '#BF5FD2',
        'dark': '#994CA8',
        'darker': '#673371',
        'darkest': '#381B3D',
    },

    pink: {
        'lightest': '#FFE9EF',
        'lighter': '#FBB6CE',
        'light': '#F687B3',
        DEFAULT: '#E5388B',
        'dark': '#C42A79',
        'darker': '#912363',
        'darkest': '#4D0F36',
    },
    simon: {
        'blue': '#0070b9',
        'gray': '#617184',
    }
};

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

/** Typography */
const typography = {
    fontSize: {
        'xs': '0.9rem',
        'sm': '1.3rem',
        'base': '1.6rem',
        'lg': '1.8rem',
        'xl': '2rem',
        '2xl': '2.4rem',
        '3xl': '3.6rem',
        '4xl': '4.8rem',
        'normalize': '62.5%',
    },
    fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
    },
    letterSpacing: {
        tightest: '-.75px',
        tighter: '-.5px',
        tight: '-.25px',
        normal: '0',
        wide: '.25px',
        wider: '.5px',
        widest: '1px',
    }
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
            fill: colors,
        },
        screens: screens,
        spacing: spacing,
        borderRadius: border.borderRadius,
        boxShadow: boxShadow,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize,
        letterSpacing: typography.letterSpacing,
    },
    presets: [
        require('./colors.preset')
    ]
};
