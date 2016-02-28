var path = require('path');

module.exports = {
  entry: {
    app: [
      './src/index.js',
      './styles/sequences.css',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: [
            'es2015',
          ]
        },
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
  }
};
