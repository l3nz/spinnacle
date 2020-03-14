var path = require('path')
var webpack = require('webpack')

module.exports = {
    context: path.join(__dirname, "."),
    entry: {
        rt: './realtime3.js'
    },

    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "./../src/main/webapp/img/js-bundle/"),
        filename: "bundle-[name].js",
//        library: 'reactcards',
//        libraryTarget: 'umd'
    },

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
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {   test: /\.(gif|jpg|jpeg|png|svg)(\?]?.*)?$/,
                loader: 'url-loader?limit=10240'
            },
            {   test: /\._svg$/,
                loader: 'svg-url-loader'
            },
            {
              test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                  }
                }
              ]
            }
        ]
    },
};


