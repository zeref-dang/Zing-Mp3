const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "resources/dist"),
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserJSPlugin({})],
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style.min.css",
    }),
  ],
  devtool: "eval-cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: "./",
    },
    historyApiFallback: true,
    port: 3001,
    open: true,
  },
};
