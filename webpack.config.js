const path = require("path");
const crypto = require("crypto");

function md5() {
  return crypto.createHash("md5");
}

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(svg|png)$/,
        type: "asset/inline",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    // Default hash function uses WebAssembly, which is unsupported on iOS node
    hashFunction: md5,
  },
  target: "web",
  devServer: {
    contentBase: ["./dist"],
    hot: true,
    publicPath: "/dist",
    watchOptions: {
      // Use poll for watch because the default implementation open too many file descriptors
      poll: 1000,
      ignored: /node_modules/,
    },
  },
};
