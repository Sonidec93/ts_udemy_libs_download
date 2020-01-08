const path = require('path');
const clean_webpack_plugin = require('clean-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/practice.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },
  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new clean_webpack_plugin.CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*']
    })
  ]
};
