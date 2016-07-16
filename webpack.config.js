const webpack = require('webpack');
const path = require('path');

module.exports = function(entryPoint, outputName, library, libraryTarget) {
    // if it doesn"t exist then we use dist as base folder
    if (!outputName.startsWith('.') || !outputName.startsWith('./')) {
        outputName = path.normalize(path.join('dist', outputName));
    } else {
        outputName = path.normalize(outputName);
    }
    return {
        entry: entryPoint || './lib/index.js',
        output: {
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
