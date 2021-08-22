    # custom-tailwind-config
A simple, custom remote config file for TailwindCSS v2.x.x
I created this package solely in the quest for self-actualizaion. I'm not responsible for:
1. Crashing your project
2. Crashing your system
3. Ruining your life & everything you care for
4. Other life problems that may or may not be caused by using this package

## Prerequisites
Have [TailwindCSS](https://tailwindcss.com/) installed. This package was published for use with TailwindCSS v2.2.4.

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
3. You can override/combine theme configuration as you would with an inline theme config. For more information check out the [official documentation](https://tailwindcss.com/docs/presets).
