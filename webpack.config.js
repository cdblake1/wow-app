const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            // template: 'src/index.ejs'
        }),
        new CleanWebpackPlugin(['dist/*.*'])
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx?)$/,
                exclude: /(node_modules)/,
                use: [
                    { loader: 'eslint-loader' },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react', 'es2015']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 4000
    }
}