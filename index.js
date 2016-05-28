// return a basic webpack configuration

var config = require('./webpack.config');

module.exports = function(params) {
    return config(...params);
};
