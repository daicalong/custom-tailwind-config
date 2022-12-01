const typography = require('../constants/typography.const');

// This file exports a single preset to be used separately instead of importing the entire theme
module.exports = {
    theme: {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize,
        letterSpacing: typography.letterSpacing,
    }
}