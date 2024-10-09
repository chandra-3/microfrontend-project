const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { mode, devServer } = require('../container/webpack.config');
const { pl } = require('faker/lib/locales');
const faker = require('faker');

module.exports = {
    mode : 'development',
    devServer : {
        port : 8082
    },
    plugins : [
        new ModuleFederationPlugin({
            name : 'cart',
            filename : 'remoteEntry.js',
            exposes : {
                './CartShow' : './src/bootstrap'
            },
            shared : {
                faker:{
                    singleton : true,
                },
            },
        }),
        new HtmlWebpackPlugin({
            template : './public/index.html'
        }),
    ],
};