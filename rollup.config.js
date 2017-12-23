import fs from 'fs';
import babel from 'rollup-plugin-babel';

let pkg = JSON.parse(fs.readFileSync('./package.json'));

export default {
  input: 'src/index.js',
  output: { file: pkg.main, format: 'cjs' },
  sourcemap: true,
  external: ['preact', 'prismjs', 'preact-html'],
  plugins: [
    babel({
      babelrc: false,
      comments: false,
      exclude: ['node_modules/**'],
      presets: [['env', { modules: false, loose: true }]],
      plugins: [
        'transform-object-rest-spread',
        ['transform-react-jsx', { pragma: 'h' }]
      ]
    })
  ]
};
