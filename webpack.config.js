const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

module.exports = function(entryPoint, outputName, library, libraryTarget) {

    // if it doesn"t exist then we use dist as base folder
    if (!fs.existsSync(outputName) && !outputName.startsWith('.')) {
        outputName = path.join(path.normalize('dist'), outputName);
    }
    console.log('outputName', outputName);
    return {
        entry: entryPoint || './lib/index.js',
        output: {
            path: outputName,
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
