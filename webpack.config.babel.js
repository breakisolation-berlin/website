import webpack from 'webpack';
import path from 'path';

const DEPLOY = process.env.DEPLOY;
let plugins = [new webpack.HotModuleReplacementPlugin(), new webpack.ProvidePlugin({
  $: "jquery",
  jQuery: "jquery",
})];

if(DEPLOY) {
  plugins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ];
}

const config = {
  entry: {
    app: DEPLOY ? ['./index.js'] : ['webpack/hot/dev-server', './index.js']
  },
  output: {
    publicPath: '/',
    path: './build',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },

  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: DEPLOY ? 'babel-loader' : 'react-hot!babel-loader'
    }, {
        test: /\.(css|scss$)/,
        loaders: ['style','css', 'sass']
    }, {
      test: /\.(png|jpg|woff|woff2|gif|ttf|eot|svg)$/,
      loader: 'url-loader',
      query: { limit: "8192",
              prefix: 'website/'}
    }]
  },
  plugins: plugins
};

export default config;
