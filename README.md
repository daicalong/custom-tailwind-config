# custom-tailwind-config
A simple, custom remote config file for TailwindCSS v3.x.x.
I created this package solely in the quest for self-actualization. I'm not responsible for:
1. Crashing your project
2. Crashing your system
3. Ruining your life along everyone & everything you care for
4. Other life problems that may or may not be caused by using this package

## Prerequisites
Have [TailwindCSS](https://tailwindcss.com/) installed. This package was published for use with TailwindCSS v3.2.4.

## Installation & Usage
1. Install custom-tailwind-config via npm `npm i custom-tailwind-config`.
2. After installing TailwindCSS, create a `tailwind.config.js` file at the root directory and add this config as a preset
    ```
    module.exports = {
        theme: {
        extend: {},
        },
        variants: {
        extend: {},
        },
        plugins: [
        ],
        presets: [
        require('custom-tailwind-config')
        ]
    };
    ```
3. Alternatively, you can import individual presets like `colors`, `spacing`, etc.
    ```
        module.exports = {
        theme: {
        extend: {},
        },
        variants: {
        extend: {},
        },
        plugins: [
        ],
        presets: [
        require('custom-tailwind-config/colors.preset'),
        require('custom-tailwind-config/spacing.preset'),
        ]
    };
    ```
4. Include the `base.css` file to your stylesheet.
5. You can override/extend theme configuration as you would with an inline config file. For more information check out the [official documentation](https://tailwindcss.com/docs/presets).