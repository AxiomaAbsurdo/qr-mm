const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,
  entry: "./src/index.tsx",
  output: {
    publicPath: "./dist",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".html"],
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
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
      template: "./index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    historyApiFallback: true,
    hot: true,
  },
};
