"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_utils_1 = require("@qest/error-utils");
const http_codes_1 = require("http-codes");
const NETWORK_CONNECT_TIMEOUT = 599;
exports.errorHandler = (logger) => (error, req, res, next) => {
    var _a, _b;
    let err = error;
    try {
        if (err.isJoi) {
            const payload = { details: (_b = (_a = err) === null || _a === void 0 ? void 0 : _a.details, (_b !== null && _b !== void 0 ? _b : [])) };
            err = new error_utils_1.UnprocessableEntityError({ err, payload, message: 'Validation error' });
        }
        err = createHandlerError(err, req);
        if (http_codes_1.INTERNAL_SERVER_ERROR <= err.code && err.code <= NETWORK_CONNECT_TIMEOUT) {
            logger.error(err);
        }
        else if (err instanceof error_utils_1.NotFoundError) {
            logger.debug(err);
        }
        else {
            logger.info(err);
        }
        exports.sendErrorResponse(err, res, next);
    }
    catch (internalError) {
        logger.fatal(internalError);
        res.status(http_codes_1.INTERNAL_SERVER_ERROR).json({
            code: http_codes_1.INTERNAL_SERVER_ERROR,
            message: internalError.toString(),
            type: 'error_processing_failure',
        });
        next();
    }
};
exports.sendErrorResponse = (error, res, next) => {
    const payload = error.payload || {};
    payload.type = error.type;
    payload.message = error.message;
    res.status(error.code).json(payload);
    next();
};
const createHandlerError = (err, req) => {
    const e = err;
    const { headers, query, user, body, path, cookies, ip, url, secure } = req;
    e.user = user;
    e.req = { headers, query, body, cookies, ip, url, path, secure };
    return e;
};
//# sourceMappingURL=index.js.map