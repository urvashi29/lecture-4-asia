const path = require('path');

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }


                    // notify webpack, files with side effects (shift it to package.json if using babel 7)
                    // "side-effects": false,


                    // below syntax is for babel 5
                    // options: {
                    //     presets: [
                    //         ['es2015', { module: false }]
                    //     ]
                    // }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    }
};

