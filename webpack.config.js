var webpack = require('webpack');

module.exports = {
    entry: [
      "./src/js/main.js"
    ],
    output: {
      path: __dirname + '/public',
      filename: "bundle.js"
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {stage: 0, plugins: ['./build/babelRelayPlugin']}
        },
        { test: /\.css$/, loader: 'style!css'}
      ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};
