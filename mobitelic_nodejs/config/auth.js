const crypto = require('crypto');

// function generateRandomKey(length) {
//     return crypto.randomBytes(length).toString('hex');
// }

// generateRandomKey(32);

module.exports = {
    secret: crypto.randomBytes(32).toString('hex')
};
