// return a basic webpack configuration

var config = require('./webpack.config');

module.exports = function() {
    return config.call(null, ...arguments);
};
