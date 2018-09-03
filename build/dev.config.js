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
          loader: 'ts-loader'
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
    alias: {
      '@client': `${context}/src/client`,
      '@server': `${context}/src/server`,
      '@atoms': `${context}/src/client/components/atoms`,
      '@molecules': `${context}/src/client/components/molecules`,
      '@organisms': `${context}/src/client/components/organisms`,
      '@styles': `${context}/src/client/styles`,
      '@redux': `${context}/src/client/redux`
    },
  },
};
