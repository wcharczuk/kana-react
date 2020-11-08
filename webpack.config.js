const path = require("path");
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": "{}",
      global: {}
    }),
    new CopyPlugin({
      patterns: [
        { from: './public/css/normalize.css', to: './css/normalize.css', toType: 'file' },
        { from: './node_modules/@blueprintjs/core/lib/css/blueprint.css', to: './css/blueprint.css', toType: 'file' },
        { from: './node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css', to: './css/blueprint-icons.css', toType: 'file' },
        { from: './public/index.html', to: './index.html', toType: 'file' }
      ],
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
  },
};