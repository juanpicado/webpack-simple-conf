const webpack = require('webpack');
const path = require('path');

/**
 * Basic webpack configuration
 * @param entryPoint the js file entry point
 * @param outputPath the output base path
 * @param outputName the output file name
 * @param library Use this, if you are writing a library and want to publish it as single file.
 * @param libraryTarget Which format to export the library eg: (var, commonjs, amd, umd, commonjs2)
 */
module.exports = (entryPoint, outputPath, outputName, library, libraryTarget) => {
    
    const baseConf = {
        entry: entryPoint || './src/index.js',
        output: {
            filename:  outputName || 'index.js',
            libraryTarget: libraryTarget || undefined,
            path: path.normalize(outputPath) || path.normalize(path.join(__dirname, 'dist')),
            library: library || undefined
        }
    };
    return baseConf;
};
