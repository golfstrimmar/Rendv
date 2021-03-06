const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  assets: "assets/",
};

const PAGES_DIR = "src/pug/pages/index.pug";

module.exports = {
  externals: {
    paths: PATHS,
  },

  entry: {
    app: "./src/index.js",
    // app: PATHS.src,
  },
  output: {
    // filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
    // publicPath: "/dist",

    filename: `${PATHS.assets}js/[name].js`,
    // path: PATHS.dist,
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "./",
          useRelativePath: true,
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },

      {
        test: /\.sass$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {
                path: `postcss.config.js`,
              },
            },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {
                path: `./postcss.config.js`,
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    overlay: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      // filename: "[name].css",
      // template: `${PAGES_DIR}/${page}`,
      filename: `${PATHS.assets}css/[name].css`,
    }),

    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/index.pug",
      filename: "./index.html",
    }),

    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/enter-lp-sm.pug",
      filename: "./enter-lp-sm.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/forget-lp-sm.pug",
      filename: "./forget-lp-sm.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/ready-lp-sm.pug",
      filename: "./ready-lp-sm.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/safe-lp-sm.pug",
      filename: "./safe-lp-sm.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/sale.pug",
      filename: "./sale.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/new.pug",
      filename: "./new.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/viewing.pug",
      filename: "./viewing.html",
    }),
    new HtmlWebpackPlugin({
      // hash: false,
      template: "src/pug/pages/viewing-flat.pug",
      filename: "./viewing-flat.html",
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: "src/img", to: "assets/img" },
        { from: "src/fonts", to: "assets/fonts" },
      ],
    }),
  ],
};
