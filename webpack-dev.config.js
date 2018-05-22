const path = require("path");
const webpack = require("webpack");
const bundlePath = path.resolve(__dirname, "public/");

module.exports = {
  mode: "development",
  entry: ["babel-polyfill", "./index.js"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["env"], plugins: ["transform-class-properties"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|pdf)$/,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    publicPath: bundlePath,
    filename: "bundle.js"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
