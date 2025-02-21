const jwt = require('jsonwebtoken');
const config = require('../config/auth');

const authMiddleware = (req, res, next) => {
    const authorizationHeader = req.header('Authorization');

    if (!authorizationHeader) {
        return res.status(401).json({ message: 'Unauthorized access' });
    }

    const parts = authorizationHeader.split(' ');

    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({ message: 'Wrong token format' });
    }

    const token = parts[1];

    try {
        const decoded = jwt.verify(token, config.secret);
        req.user = decoded.user;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
