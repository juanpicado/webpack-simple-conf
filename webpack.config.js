const webpack = require('webpack');
const path = require('path');

module.exports = function(entryPoint, outputName, library, libraryTarget) {
    return {
        entry: entryPoint || './lib/index.js',
        output: {
            path: path.normalize('dist'),
            filename:  outputName || 'index.js',

            // Export itself to a global var
            libraryTarget: libraryTarget || 'var',

            // Name of the global var: "Foo"
            library: library
        },

        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                output: {
                    comments: false
                }
            })
        ]
    };

};
