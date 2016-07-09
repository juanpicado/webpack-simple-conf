## webpack-simple-conf

This module helps to reduce the overloaded webpack configuration, dependencies management.

No more webpack hell configuration for simple libraries.

## Usage

1. Create a file in the root folder `webpack.conf.js` and add the following code.
 
````
    const configuration = require('webpack-simple-conf');
    const webpackConf = configuration(
    './src/index.js',
    'index.min.js',
    'myAppFoo',
    'umd');
    module.exports = webpackConf;
````

2. Run webpack in the root folder
3. See output file on `dist/index.min.js`

#### Options

The module returns a function, it accepts 4 parameters.

1. The entry point file 
2. The output name
3. The name of the library
4. The library target

