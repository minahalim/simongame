const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isDev = require('isdev');
const webpack = require('webpack');
const merge = require('webpack-merge');

const { dir } = require('./src/config/serverConfig');

const TARGET = process.env.npm_lifecycle_event;

let config = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/client.js',
  ],
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
  },
  output: {
    path: path.join(dir.public, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /\.(woff|woff2|eot|ttf)$/,
      loader: 'file?name=fonts/[name].[ext]'
    },
    {
      test: /\.(sass|scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            url: false,
            modules: true,
            camelCase: true,
            sourceMap: true,
            localIdentName: '[name]_[local]_[hash:base64:5]'
          }
        }, 'sass-loader']
      }),
    }],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true,
      disable: isDev
    })
  ],
};

if (TARGET === 'build:prod' && !isDev) {
  config = merge(config, {
    bail: true,
    devtool: 'source-map',
    output: { publicPath: '/build/' },
  });
}

if (TARGET === 'server:dev' && isDev) {
  config = merge(config, {
    devtool: 'eval-source-map',
    entry: ['webpack-hot-middleware/client'],
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ],
    output: { publicPath: '/' },
  });
}

module.exports = config;
