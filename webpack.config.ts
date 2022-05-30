/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const isDev = process.env.NODE_ENV === 'dev';

const config: Configuration = {
  entry: './src/index.tsx',
  mode: isDev ? 'development' : 'production',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: isDev ? '/' : '/cv',
  },
  devtool: 'eval-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '林雨钦 - 前端开发',
      template: path.resolve(__dirname, 'public', 'index.ejs'),
      favicon: path.resolve(__dirname, 'public', 'favicon.png'),
    }),
  ],
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
      '@style': path.resolve(__dirname, 'src/style/'),
      '@section': path.resolve(__dirname, 'src/section/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.([jt])sx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
  devServer: {
    port: 9999,
    hot: true,
    client: {
      logging: 'info',
      progress: true,
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
};

// eslint-disable-next-line no-console
console.log('\n🙏 祝我2022夏天能找到个好工作 🙏\n');

export default config;
