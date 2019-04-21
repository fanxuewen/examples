const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin =require('clean-webpack-plugin');

module.exports = {
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    entry: {
        app: './src/index.js'
     
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].bundle.js',
    },
    mode: 'development',
   
    devServer:{
        contentBase: './dist'
    }
};