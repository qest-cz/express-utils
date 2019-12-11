"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsSetup = (originHeader) => (req, res, next) => {
    res.set('Access-Control-Allow-Origin', originHeader);
    res.set('Access-Control-Allow-Credentials', 'true');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    if ('OPTIONS' === req.method) {
        res.send(200);
    }
    else {
        next();
    }
};
//# sourceMappingURL=index.js.map