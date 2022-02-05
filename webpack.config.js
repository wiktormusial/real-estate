const path = require("path")
const ESLintPlugin = require("eslint-webpack-plugin")
const Dotenv = require("dotenv-webpack")

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "js/index.js",
    path: path.resolve(__dirname, "static"),
  },
  watch: true,
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["ts", "tsx"],
    }),
    new Dotenv(),
  ],
}
