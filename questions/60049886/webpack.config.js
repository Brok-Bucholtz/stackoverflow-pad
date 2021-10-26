const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
    return {
        entry: [
            './src/js/index.tsx',
        ],
        mode: 'development',
        module: {
            rules: [{
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/html/index.html',
                favicon: './src/media/favicon.ico',
            }),
        ],
        resolve: {
            extensions: ['.wasm', '.mjs', '.json', '.js', '.jsx', '.ts', '.tsx'],
        },
    };
};
