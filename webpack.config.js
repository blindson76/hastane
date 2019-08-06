const appRoot = require("app-root-path");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const build = process.argv.indexOf("-p") !== -1;

const paths = {
    root: appRoot.path,
    app: path.join(appRoot.path,"/app"),
    build: path.join(appRoot.path,"/build"),
    node_modules: path.join(appRoot.path,"/node_modules")
};

const webpackConf = {
    context: paths.app,
    entry: "./index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    cache:true,
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        modules: [paths.app, paths.node_modules]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader",exclude: [paths.node_modules] },
            {
                /**
                 * @link https://github.com/webpack/file-loader
                 * npm install file-loader --save-dev
                 */
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: "file-loader",
                include: /fonts/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [ 'css-loader' ] })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                // If you are having trouble with urls not resolving add this setting.
                                // See https://github.com/webpack-contrib/css-loader#url
                                url: false,
                                minimize: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins:[
        new CopyWebpackPlugin([
            {
                from: "../assets"
            }
        ]),
        new ExtractTextPlugin("styles.css")
    ]
};

if (build){
    webpackConf.devtool = "none";
}
module.exports = webpackConf;