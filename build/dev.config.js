const path = require('path');

const context = path.join(__dirname, '..');

module.exports = {
  context,
  entry: {
    app: './src/client/index.tsx',
  },
  output: {
    publicPath: '/assets/',
    filename: 'bundle.js',
    path: path.resolve(context, './public'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.join(context, 'typescript/client.conf.json'),
          },
        },
      },
    ],
  },
  target: 'web',
  mode: 'development',
  devServer: {
    host: `localhost`,
    port: 9000,
    contentBase: path.join(context, 'public'),
    proxy: { '*': `http://localhost:5000` },
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
  },
};
