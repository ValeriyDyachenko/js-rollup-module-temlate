import babel from 'rollup-plugin-babel';
import {eslint} from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {uglify} from 'rollup-plugin-uglify';

export default {
    entry: 'src/scripts/main.js',
    dest: 'build/js/main.min.js',
    format: 'iife',
    moduleName: 'settie',
    sourceMap: false, //'inline',
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        eslint({
            exclude: 'node_modules/**'
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        uglify(),
    ],
};
