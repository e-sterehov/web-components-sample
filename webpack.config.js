const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = ({ mode }) => {
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
                template: './src/index.html'
            }),
            new CopyWebpackPlugin([
                {
                    context: 'node_modules/@webcomponents/webcomponentsjs',
                    from: '**/*.js',
                    to: 'webcomponents'
                }
            ])
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
        devtool: mode === 'development' ? 'source-map' : 'nonde'
    };
};
