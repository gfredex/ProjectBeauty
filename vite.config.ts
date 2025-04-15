import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
    base: './', // Базовый путь для проекта при его развертывании
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ['legacy-js-api'], // Современный компилятор SCSS
            },
        },
    },
    plugins: [
        react(),
        svgr(),
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            symbolId: 'icon-[name]',
            svgoOptions: {
                plugins: [
                    {
                        name: 'preset-default',
                    },
                    {
                        name: 'removeAttrs',
                        params: { attrs: '(fill|stroke)' }, // удаление всех fill и stroke
                    },
                    {
                        name: 'addAttributesToSVGElement',
                        params: {
                            attributes: [{ fill: 'currentColor' }], // добавление fill="currentColor" на родительский SVG
                        },
                    },
                    {
                        name: 'convertColors',
                        params: {
                            currentColor: true, // явно преобразовать все цвета во внутренних элементах в currentColor
                        },
                    },
                ],
            },
        }),
    ],
});
