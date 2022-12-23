import { babel } from '@rollup/plugin-babel';

export default {
   input: 'dist/index.js',
   external: ['mysql2/promise'],
   plugins: [
      babel({
         babelHelpers: 'bundled',
         presets: ['@babel/preset-env'],
      }),
   ],
   output: [
      {
         file: './index.cjs',
         format: 'cjs',
      },
      {
         file: './index.mjs',
         format: 'es',
      },
   ],
};
