const webpack = require('webpack');
const path = require('path');

const config = {
  mode: 'development',
  target: 'web',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval-cheap-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: process.env.PORT || 8282, /* default : 8080 */
        devMiddleware: {
            writeToDisk: false, /* refer for explanation : 
            @ https://github.com/webpack/webpack-dev-middleware#writetodisk 
            @ https://dev.to/projektorius96/webpack-devserver-26g7
            */
    },
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        loader: 'svelte-loader',
        /*// to use following, please do "npm i svelte-preprocess" :         
          options: {
          preprocess:  require('svelte-preprocess')({})
        } */
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'] /* load order (index): [1] -> [0] : first import then inject not opposite way i.e. reverser order */
      },
      /* {another rule (if any)} */
    ]
  },
  resolve: {
    extensions: [
      '.mjs',
      '.js',
      '.svelte'
    ]
  },
};

module.exports = config;