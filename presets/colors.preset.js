import colors from '../constants/colors.const';

// This file exports a single preset to be used separately instead of importing the entire theme
module.exports = {
    theme: {
        extend: {
            fill: colors,
        },
        colors: colors,
    }
}