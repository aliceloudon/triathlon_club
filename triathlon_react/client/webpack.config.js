var config = {
  entry: __dirname + '/src/app.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  devtool: "source-map",
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};

module.exports = config;
