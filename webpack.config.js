const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: `${__dirname}/src/app/app.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    // publicPath: 'http://192.168.0.144:7700/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.(mp3)$/,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      jsxRenderer: [`${__dirname}/src/app/utils/jsx-renderer.js`, 'default'],
      importAll: [`${__dirname}/src/app/utils/all-import.js`, 'default'],
    }),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/public/index.html`,
      inject: 'body',
    }),
  ],
  devServer: {
    contentBase: './src/public',
    port: 7700,
    progress: true,
    watchContentBase: true,
    // host: '192.168.0.144'
  },
};
