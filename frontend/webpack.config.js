// const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: `${__dirname}/src/index.tsx`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/',
    filename: 'bundle.js',
  },


  // // generate different source maps for dev and production
  // devtool: process.argv.indexOf('-p') === -1 ? 'eval-source-map' : 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  module: {
    rules: [
      // use ts-loader for ts and js files so all files are converted to es5
      {
        test: /\.(tsx?|js)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'images/'
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.REACT_APP_HOMEPAGE_URL': JSON.stringify(process.env.REACT_APP_HOMEPAGE_URL),
      'process.env.REACT_APP_DEFAULT_ROUTING_PATH': JSON.stringify(process.env.REACT_APP_DEFAULT_ROUTING_PATH),
      'process.env.REACT_APP_BACKEND_URL': JSON.stringify(process.env.REACT_APP_BACKEND_URL),
      'process.env.REACT_APP_RECAPTCHA_SITE_KEY': JSON.stringify(process.env.REACT_APP_RECAPTCHA_SITE_KEY),
    })
  ],

  mode: 'development',

  // optimization: {
  //   minimizer: [new UglifyJsPlugin({
  //     uglifyOptions: {
  //       mangle: true,
  //       output: {
  //         comments: false
  //       }
  //     }
  //   })]
  // },

  // // required because the defaults for webpack -p don't remove multiline comments
  // optimization:
  //   process.argv.indexOf('-p') === -1
  //     ? {}
  //     : {
  //         minimize: true,
  //         minimizer: [
  //           new TerserPlugin({
  //             terserOptions: {
  //               output: {
  //                 comments: false,
  //               },
  //             },
  //             extractComments: false,
  //           }),
  //         ],
  //       },

  // to mimic GitHub Pages serving 404.html for all paths
  // and test spa-github-pages redirect in dev
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /\//, to: '/404.html' }],
    },
    static: `${__dirname}`,
    host: '0.0.0.0',
    port: 8080,
    server: process.env.REACT_APP_DEFAULT_ROUTING_PATH
  },
};
