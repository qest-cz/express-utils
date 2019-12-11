"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_utils_1 = require("@qest/error-utils");
exports.serviceUnavailable = (unavailable = false) => (req, res, next) => {
    try {
        if (unavailable) {
            const unavailableError = new error_utils_1.ServiceUnavailableError();
            res.status(unavailableError.code).json({
                message: unavailableError.message,
            });
        }
        next();
    }
    catch (e) {
        next(e);
    }
};
//# sourceMappingURL=index.js.map