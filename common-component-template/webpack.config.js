const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const config = {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: path.resolve(__dirname, "node_modules"),
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
                    plugins: [
                        "@babel/plugin-proposal-class-properties"
                    ]
                },

            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: path.resolve(__dirname, "node_modules"),
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                // Preprocess our own .less files
                // This is the place to add your own loaders (e.g. sass/less etc.)
                // for a list of loaders, see https://webpack.js.org/loaders/#styling
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: [
                    {
                        loader: "url-loader",
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [
            ".js",
            ".jsx",
            ".tsx",
            ".ts",
            ".scss",
            ".css",
            ".woff",
            ".woff2",
            ".eot",
            ".ttf",
            ".svg",
        ],
    },
    externals: {
        react: {
            root: "React",
            commonjs2: "react",
            commonjs: "react",
            amd: "react",
        },
        "react-dom": {
            root: "ReactDOM",
            commonjs2: "react-dom",
            commonjs: "react-dom",
            amd: "react-dom",
        }
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    },
};

const main = {
    entry: "./src/components/index.ts",
    output: {
        path: path.resolve(__dirname, "lib"),
        filename: "index.js",
        libraryTarget: 'commonjs2'
    },
    ...config,
};

module.exports = [main];
