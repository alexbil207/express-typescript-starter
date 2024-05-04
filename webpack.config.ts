import path from 'path'
import Dotenv from 'dotenv-webpack'

const config = {
    mode: 'production',
    target: 'node',
    entry: './index.ts',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new Dotenv({
            path: './.env.prod',
        }),
    ],
}

export default config
