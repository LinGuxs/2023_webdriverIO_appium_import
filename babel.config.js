
let modules = process.env.BABEL_ENV === 'commonjs' || process.env.NODE_ENV === 'test' ? 'commonjs' : false;
module.exports = {
	presets : [['@babel/preset-env', {modules}], '@babel/preset-react'],
	plugins : ['react-hot-loader/babel','@babel/plugin-proposal-class-properties']
};