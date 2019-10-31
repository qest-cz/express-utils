import { ILogger } from '@qest/logger-utils';
import * as Sentry from '@sentry/node';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { errorHandler, logRequest, notFoundHandler, rateLimiter } from '../middlewares';
import { IExpressApp, IExpressAppMiddlewareConfig, IExpressConfig } from './../interfaces';

const defaultAppMiddlewares = (logger: ILogger): IExpressAppMiddlewareConfig => ({
    notFoundHandler,
    errorHandler: errorHandler(logger),
    logRequest: logRequest(logger),
    rateLimiter: rateLimiter({ windowMs: 5 * 1000, max: 500, enabled: true }),
});

const passThroughMiddleware = (req, res, next) => next();

const defaultJsonParser = (options: bodyParser.OptionsJson) => bodyParser.json(options);
const defaultUrlParser = (options: bodyParser.OptionsUrlencoded) => bodyParser.urlencoded(options);

export const server = (options: IExpressApp, config?: IExpressConfig) => {
    const defaultConfig: IExpressConfig = {
        useDefaultMiddlewares: true,
        useSentry: false,
        bodyParserOptions: { limit: '50mb' },
        urlParserOptions: { extended: true },
        ...config,
    };

    const { logger, router, middlewares, preMiddleware, postMiddleware, bodyParser, urlParser } = options;

    const activeMiddlewares = defaultConfig.useDefaultMiddlewares ? { ...defaultAppMiddlewares(logger), ...middlewares } : middlewares;

    return express()
        .use(defaultConfig.useSentry ? Sentry.Handlers.requestHandler : passThroughMiddleware)
        .use(urlParser ? urlParser : defaultUrlParser(defaultConfig.urlParserOptions))
        .use(activeMiddlewares.rateLimiter ? activeMiddlewares.rateLimiter : passThroughMiddleware)
        .use(bodyParser ? bodyParser : defaultJsonParser(defaultConfig.bodyParserOptions))
        .use(activeMiddlewares.logRequest ? activeMiddlewares.logRequest : passThroughMiddleware)
        .use(preMiddleware ? preMiddleware : passThroughMiddleware)

        .use('/', router)

        .use(defaultConfig.useSentry ? Sentry.Handlers.errorHandler : passThroughMiddleware)
        .use(postMiddleware ? postMiddleware : passThroughMiddleware)
        .use(activeMiddlewares.notFoundHandler)
        .use(activeMiddlewares.errorHandler);
};
