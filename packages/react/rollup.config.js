import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { createRequire } from 'module';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const external = Object.keys(pkg.peerDependencies || {});

const input = 'src/index.ts';

export default [
  // ESM and CJS builds
  {
    input,
    external,
    plugins: [
      peerDepsExternal(),
      resolve({
        browser: true,
        preferBuiltins: false,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: [
          '**/*.test.*',
          '**/*.spec.*',
          '**/test/**',
          'src/test/**/*',
          '**/test/**/*',
          '**/__test__/**',
          '**/stories/**',
        ],
      }),
    ],
    output: [
      // ESM build
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
        exports: 'named',
      },
      // CJS build
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
    ],
  },
  // ESM minified build
  {
    input,
    external,
    plugins: [
      peerDepsExternal(),
      resolve({
        browser: true,
        preferBuiltins: false,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: [
          '**/*.test.*',
          '**/*.spec.*',
          '**/test/**',
          'src/test/**/*',
          '**/test/**/*',
          '**/__tests__/**',
          '**/stories/**',
        ],
      }),
      terser({
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
        mangle: {
          reserved: ['React'],
        },
      }),
    ],
    output: {
      file: 'dist/index.min.js',
      format: 'esm',
      sourcemap: true,
      exports: 'named',
    },
  },
  // UMD build for CDN usage
  {
    input,
    external: ['react', 'react-dom'],
    plugins: [
      resolve({
        browser: true,
        preferBuiltins: false,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: [
          '**/*.test.*',
          '**/*.spec.*',
          '**/test/**',
          'src/test/**/*',
          '**/test/**/*',
          '**/__tests__/**',
          '**/stories/**',
        ],
      }),
      terser({
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      }),
    ],
    output: {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'BuzzReact',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
      sourcemap: true,
      exports: 'named',
    },
  },
  // TypeScript declarations
  {
    input,
    external,
    plugins: [
      dts({
        tsconfig: './tsconfig.json',
        exclude: [
          '**/*.test.*',
          '**/*.spec.*',
          '**/test/**',
          'src/test/**/*',
          '**/test/**/*',
          '**/__tests__/**',
          '**/stories/**',
        ],
      }),
    ],
    output: {
      file: pkg.types,
      format: 'esm',
    },
  },
];
