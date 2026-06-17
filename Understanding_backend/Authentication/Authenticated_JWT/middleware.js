const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
    const token = req.headers.token;

    if (!token) {
        res.status(403).json({
            message: "You are not logged in"
        });
        return;
    }

    const decoded = jwt.verify(token, "token");

    if (!decoded.username) {
        res.status(403).json({
            message: "malformed token"
        });
        return;
    }

    req.username = decoded.username;

    next();
}

module.exports = {
    authMiddleware
}