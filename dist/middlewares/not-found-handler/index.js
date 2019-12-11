"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_utils_1 = require("@qest/error-utils");
const http_codes_1 = require("http-codes");
exports.notFoundHandler = (req, res, next) => {
    if (res.statusCode === http_codes_1.OK || res.statusCode === 404) {
        res.status(http_codes_1.NOT_FOUND);
        next(new error_utils_1.NotFoundError());
    }
};
//# sourceMappingURL=index.js.map