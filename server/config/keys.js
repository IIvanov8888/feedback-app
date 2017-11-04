// define the env here
if (process.env.NODE_ENV === 'production') {
    // we are in PROD
    module.exports = require('./prod');
} else {
    // we are in DEV
    module.exports = require('./dev');
}