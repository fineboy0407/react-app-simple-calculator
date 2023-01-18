// to copy the static resources to ./dist
const copyWebpack = require("copy-webpack-plugin");

module.exports = {
  devtool: "source-map",
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new copyWebpack({
      patterns: [
        {
          from: "./src/icons/*.ico",
          to: "images/[name][ext]",
        },
        { from: "./src/*.html", to: "[name][ext][query]" },
      ],
    }),
  ],
};
