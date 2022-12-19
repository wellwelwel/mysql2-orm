import commonjs from '@rollup/plugin-commonjs';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';

export default {
   input: 'src/index.js',
   output: {
      file: './lib/index.cjs',
      format: 'cjs',
   },

   external: ['mysql2/promise'],
   plugins: [
      commonjs(),
      getBabelOutputPlugin({
         presets: ['@babel/preset-env'],
         compact: true,
      }),
   ],
};
