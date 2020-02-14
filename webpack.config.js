const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');

// let isProduction = (process.env.NODE_ENV == "production");

module.exports = {
  devtool: 'source-map',
  mode: "development",
  entry: {
    // context: path.resolve(__dirname, 'src'),
    app: [
      './src/js/index.js',
      './src/style/main.scss',
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
  },

  devServer: {
    contentBase: path.join(__dirname, `public`),
    compress: false,
    open: true,
    port: 8085,
  },

  module: {
    rules: [
      {
        test: /\.pug$/,
        loaders: [{
            loader: "html-loader"
          },
          {
            loader: "pug-html-loader",
            options: {
              "pretty": true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            },
          ],
        })
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: './src/index.pug'
    }),
    new ExtractTextPlugin(
      './css/[name].css'
    ),
    new CopyWebpackPlugin([{
      from: './src/img',
      to: './img'
    }]),
  ]
}
