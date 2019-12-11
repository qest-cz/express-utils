"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRobots = (req, res, next) => {
    try {
        res.type('text/plain');
        res.send('User-agent: *\nDisallow: /');
    }
    catch (e) {
        next(e);
    }
};
//# sourceMappingURL=index.js.map