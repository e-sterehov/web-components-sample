const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    const { mode } = argv;
    console.log(`Run webpack in "${mode}" mode`);
    return {
        mode,
        entry: {
            app: './src/index.js'
        },
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist')
        },
        devServer: {
            contentBase: './dist'
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: 'Sample Web Components App'
            })
        ]
    };
};
