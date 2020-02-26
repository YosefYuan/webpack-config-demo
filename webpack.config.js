const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const testVar = 'testVar';
console.log(process.env);

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js'
  },
  devServer: {
    hot: true,
    open: true,
    port: 8090,
    contentBase: './src',
    compress: true
  },
  module: {
    rules: [
      // {
      //   test: require.resolve('lodash'),
      //   use: {
      //     loader: 'expose-loader',
      //     options: '_'
      //   }
      // },
      {
        test: /\.(htm|html)$/,
        loader: 'html-withimg-loader'
      },
      {
        test: /.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 5 * 1024,
            outputPath: 'images',
            name: '[name].[hash:6].[ext]'
          }
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      _: 'lodash'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        NODE_ENV1: JSON.stringify(process.env.NODE_ENV1)
      }
    })
  ]
};
