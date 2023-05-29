const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


const isProduction = process.env.NODE_ENV === "production";


module.exports = {
    entry: "./action.js",
    mode: isProduction ? "production" : "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            { test: /\.css$/,  use: [MiniCssExtractPlugin.loader, "css-loader"] },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resourse",
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: "asset/resourse",
        },
      ],
    },
   plugins: [
    // new CopyPlugin ({
    //    patterns: [{ from: "static", to: "static" }],
    // }),
    new HtmlWebpackPlugin({
    template: "./index.html",
   }),
   new MiniCssExtractPlugin(),
],
optimization: {
    minimizer: ["...", new CssMinimizerPlugin()],
},
// devtool: isProduction ? "hidden-sourse-map" : "sourse-map",
};