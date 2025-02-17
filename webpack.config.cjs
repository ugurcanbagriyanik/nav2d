var path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/nav2d.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "nav2d.min.js",
        library: "nav2d",
        libraryTarget: "commonjs2",
        globalObject: `this`,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    externals: {
    },
    devtool: "source-map",
};
