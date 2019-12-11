"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("@sentry/node"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../middlewares");
const defaultAppMiddlewares = (logger) => ({
    notFoundHandler: middlewares_1.notFoundHandler,
    errorHandler: middlewares_1.errorHandler(logger),
    logRequest: middlewares_1.logRequest(logger),
    rateLimiter: middlewares_1.rateLimiter({ windowMs: 5 * 1000, max: 500, enabled: true }),
});
const passThroughMiddleware = (req, res, next) => next();
const defaultJsonParser = body_parser_1.default.json;
const defaultUrlParser = body_parser_1.default.urlencoded;
exports.server = (options, config) => {
    const defaultConfig = Object.assign({ useDefaultMiddlewares: true, useSentry: false, bodyParserOptions: { limit: '50mb' }, urlParserOptions: { extended: true } }, config);
    const { logger, router, middlewares, preMiddleware, postMiddleware, bodyParser, urlParser } = options;
    const activeMiddlewares = defaultConfig.useDefaultMiddlewares ? Object.assign(Object.assign({}, defaultAppMiddlewares(logger)), middlewares) : middlewares;
    return express_1.default()
        .use(defaultConfig.useSentry ? node_1.default.Handlers.requestHandler : passThroughMiddleware)
        .use(urlParser || defaultUrlParser(defaultConfig.urlParserOptions))
        .use(activeMiddlewares.rateLimiter ? activeMiddlewares.rateLimiter : passThroughMiddleware)
        .use(bodyParser || defaultJsonParser(defaultConfig.bodyParserOptions))
        .use(activeMiddlewares.logRequest ? activeMiddlewares.logRequest : passThroughMiddleware)
        .use(preMiddleware || passThroughMiddleware)
        .use('/', router)
        .use(defaultConfig.useSentry ? node_1.default.Handlers.errorHandler : passThroughMiddleware)
        .use(postMiddleware || passThroughMiddleware)
        .use(activeMiddlewares.notFoundHandler)
        .use(activeMiddlewares.errorHandler);
};
//# sourceMappingURL=index.js.map