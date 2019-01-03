const { BABEL_ENV, NODE_ENV } = process.env;
const modules = BABEL_ENV === 'cjs' || NODE_ENV === 'test' ? 'commonjs' : false;

const loose = true;

module.exports = {
  presets: [['@babel/env', { loose, modules }], '@babel/flow', '@babel/react'],
  plugins: [
    'preval',
    ['transform-react-remove-prop-types', { mode: 'unsafe-wrap' }],
    '@babel/plugin-transform-flow-strip-types',
    '@babel/plugin-proposal-object-rest-spread',
    ['@babel/plugin-proposal-class-properties', { loose }],
    modules === 'commonjs' && 'add-module-exports',
  ].filter(Boolean),
};
