const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mode = process.env.NODE_ENV || "development";
const outputFilename = mode === "production" ? "bundle.[hash].js" : "bundle.js";

module.exports = {
  mode,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: outputFilename,
    publicPath: "/",
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
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
