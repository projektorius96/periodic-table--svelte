const webpack = require('webpack');
const path = require('path');

const config = {
  mode: 'development',
  target: 'web',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: process.env.PORT || 8282, /* default : 8080 */
        // stack overflow solutions [DIDN'T WORK]
/*         historyApiFallback: {
          index: true
        }, */
        devMiddleware: {
            writeToDisk: false, /* refer for explanation : 
            @ https://github.com/webpack/webpack-dev-middleware#writetodisk 
            @ https://dev.to/projektorius96/webpack-devserver-26g7
            */
            // stack overflow solutions [DIDN'T WORK]
            // headers: {"X-Content-Type-Options":"nosniff"},
            // mimeTypes: {html: "text/html", css: "text/css", js: "application/javascript"}
    },
  },
  module: {
    rules: [
      /* rules specificity up-dated from : @https://github.com/sveltejs/svelte-loader */
      {
        test: /\.(html|svelte)$/,
        use: 'svelte-loader'
      },
      {
        // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
        test: /node_modules\/svelte\/.*\.m?js$/,
        resolve: {
          fullySpecified: false
        },
      }
    ],
  },
  resolve: {
    extensions: [
      '.mjs',
      '.js',
      '.svelte'
    ]
  },
}

module.exports = config;