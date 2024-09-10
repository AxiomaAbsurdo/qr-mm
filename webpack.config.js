const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mode = process.env.NODE_ENV || "development";
const outputFilename =
  mode === "production" ? "bundle.[contenthash].js" : "bundle.js";

module.exports = {
  mode,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: outputFilename,
    publicPath: "/",
    chunkFilename: "[name].[contenthash].chunk.js", // Add chunk filename
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: "file-loader", // Add image loader
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: "file-loader", // Add font loader
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      minify: mode === "production", // Minify HTML in production mode
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 10000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
};
