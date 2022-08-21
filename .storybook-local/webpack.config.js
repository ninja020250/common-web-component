const path = require("path");

module.exports = {
    module: {
        rules: [
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
    }
};