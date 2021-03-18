const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackRequireFrom = require('webpack-require-from');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

const prod = process.env.NODE_ENV === 'production';

const config = {
  entry: {
    app: './src/js/app',
  },
  output: {
    filename: 'js/[name].js?v=[chunkhash:5]',
    chunkFilename: 'js/[name].js?v=[chunkhash:5]',
    path: path.resolve('app/assets'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'esbuild-loader',
        options: {
          target: 'es2015',
        },
      },
      {
        test: /\.css$/,
        include: /node_modules/, // do not use postCSS when processing npm css
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false } },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false } },
          'postcss-loader',
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015',
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css?v=[chunkhash:5]',
    }),
  ],
  mode: prod ? 'production' : 'development',
};

module.exports = config;
