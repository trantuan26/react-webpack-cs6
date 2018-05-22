
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        index: './app/index.jsx',
        another: './app/app.jsx'
    },
    output: {
        path: __dirname,
        filename: './public/[name].bundle.js'
    },
    // plugins: [
    //     new HTMLWebpackPlugin({
    //         title: 'Code Splitting'})],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: 'file-loader?name=[name].[ext]'  // <-- retain original file name
            }
        ]
    }
}