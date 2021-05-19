module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      { test: /\.html$/, use: ['html-loader'] },
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
