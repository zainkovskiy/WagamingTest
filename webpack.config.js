const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src', 'components'),
      actions: path.resolve(__dirname, 'src', 'actions'),
      images: path.resolve(__dirname, 'src', 'images'),
      assets: path.resolve(__dirname, 'src', 'assets'),
      hooks: path.resolve(__dirname, 'src', 'hooks'),
    },
  },
  devtool: 'eval-cheap-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        use: [
          miniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
				test: /\.(png|jpe?g)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							name: "[name].[ext]",
							outputPath: 'assets/images',
						}
					}
				]
			},
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html'
    }),
    new miniCssExtractPlugin({
      filename: 'main.css'
    })
  ],
  devServer: {
    historyApiFallback: true,
  } 
}