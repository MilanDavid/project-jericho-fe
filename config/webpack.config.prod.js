const {resolve} = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotEnv = require('dotenv-webpack');
const envSettings = require('dotenv').config({path: resolve(__dirname, '../.env')}).parsed;
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: 'index.js',
    output: {
        filename: 'app-[hash].js',
        path: resolve(__dirname, '../public'),
        publicPath: process.env.BASE_URL
    },
    mode: "production",
    context: resolve(__dirname, '../src/' + process.env.THEME),
    resolve: {
        modules: [
            resolve(__dirname, "../src/" + process.env.THEME),
            "node_modules"
        ],
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                extractComments: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({
                sourceMap: true
            })
        ]
    },
    devtool: false,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            data: `@import "${process.env.THEME}/variables";`,
                            sourceMap: true,
                            includePaths: [
                                resolve(__dirname, "../src/styling")
                            ]
                        }
                    },
                    {
                        loader: 'postcss-loader',
                    },
                ]
            },
            /* Fonts */
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                loader: 'file-loader',
            },

            /* Images/Videos */
            {
                test: /\.(png$|jpg$|gif$|svg|mp4$)$/,
                loader: 'file-loader',
            },
        ],
    },

    plugins: [
        // Copy html file to public
        new HtmlWebpackPlugin({
            // templateParameters: {
            //    'favicon': theme.favicon,
            //    'theme': process.env.THEME
            //  },
            template: 'index.html',
            alwaysWriteToDisk: true
        }),

        // Ensure that html file get's saved (even when using webpack dev server)
        //  new HtmlWebpackHarddiskPlugin(),

        // Copy static asset files
        //  new CopyWebpackPlugin([{from: resolve(__dirname, '../assets'), to: resolve(__dirname, '../public')}]),
        //   new CopyWebpackPlugin([{
        //      from: resolve(__dirname, '../todo.txt'),
        //       to: resolve(__dirname, '../public/todo.txt')
        //  }]),

        // Put all the vars in .env on process.env
        new DotEnv({
            safe: true,
            systemvars: true
        }),

        // Exclude all the unneeded locales from moment to keep package size small
        // new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /(en)$/),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

        new FaviconsWebpackPlugin('../images/ra/favicon-32x32.png'),

        // Extract CSS to seperate file
        new MiniCssExtractPlugin({filename: "[name]-[hash].css"}),

        new webpack.SourceMapDevToolPlugin({
            filename: '[name].map.js',
        })
    ]
};
