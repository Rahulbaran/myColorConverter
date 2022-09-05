const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const prodEnv = process.env.NODE_ENV === "production";

module.exports = {
  context: resolve(__dirname, "src"),
  entry: {
    main: "./js/main.js"
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "assets/[name][ext]"
  },
  mode: prodEnv ? "production" : "development",

  devtool: prodEnv ? "source-map" : "inline-source-map",
  devServer: {
    port: 5050,
    host: "localhost",
    open: true,
    static: "./dist",
    compress: true
  },

  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.scss$/i,
        exclude: new RegExp("node_modules"),
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: new RegExp("\\.ttf$"),
        type: "asset/resource"
      }
    ]
  },

  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: {
                removeAll: true
              }
            }
          ]
        }
      })
    ],
    minimize: prodEnv
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      title: "myColorConverter - HEX, RGB & HSL"
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ]
};
