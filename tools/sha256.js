const crypto = require('crypto');


exports.do = str => crypto.createHash('sha256').update(str).digest('hex')


