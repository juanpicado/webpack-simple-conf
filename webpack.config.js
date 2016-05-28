const webpack = require('webpack');

module.exports = function(entryPoint, outputName, library) {
    return {
        entry: entryPoint || './lib/index.js',
        output: {
            path: 'dist/',
            filename:  outputName || 'index.js',

            // Export itself to a global var
            libraryTarget: 'var',

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
