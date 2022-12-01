const spacing = require('../constants/spacing.const.js');

// This file exports a single preset to be used separately instead of importing the entire theme
module.exports = {
    theme: {
        extend: {
            maxWidth: spacing,
            minWidth: spacing,
            maxHeight: spacing,
            minHeight: spacing,
        },
        spacing: spacing,
    }
}