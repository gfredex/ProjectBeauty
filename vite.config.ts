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
                        params: {
                            overrides: {
                                cleanupNumericValues: false,
                                convertShapeToPath: false,
                                removeViewBox: false,
                            },
                        },
                    },
                    {
                        name: 'removeViewBox',
                        active: false,
                    },
                    {
                        name: 'removeAttrs',
                        params: { attrs: '(fill|stroke|width|height)' },
                    },
                    {
                        name: 'addAttributesToSVGElement',
                        params: {
                            attributes: [{ fill: 'currentColor' }],
                        },
                    },
                    {
                        name: 'convertColors',
                        params: {
                            currentColor: true,
                        },
                    },
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});