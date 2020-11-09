import * as Sentry from '@sentry/node';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { RequestHandlerParams } from 'express-serve-static-core';
import {
    errorHandler,
    logRequest,
    notFoundHandler,
    rateLimiter,
} from '../middlewares';
import { ExpressApp, Logger } from './../interfaces';

type MiddlewareDef =
    | express.ErrorRequestHandler
    | express.RequestHandler
    | RequestHandlerParams
    | undefined
    | null
    | false;

type ValidMiddleware = NonNullable<Exclude<MiddlewareDef, false>>;

const getDefaultAppMiddleware = (
    logger: Logger,
): ExpressApp['middleware']['specificallyOrdered'] => ({
    notFoundHandler,
    errorHandler: errorHandler(logger),
    logRequest: logRequest(logger),
    rateLimiter: rateLimiter({ windowMs: 5 * 1000, max: 500, enabled: true }),
    bodyParser: getDefaultUrlParser({ limit: '50mb' }),
    urlParser: getDefaultUrlParser({ extended: true }),
});

export const getDefaultJsonParser = (options: bodyParser.OptionsUrlencoded) =>
    bodyParser.json(options);

export const getDefaultUrlParser = (options: bodyParser.OptionsUrlencoded) =>
    bodyParser.urlencoded(options);

/**
 * Creates a express app with reasonable defaults and middleware.
 * It is a simple wrapper around a provided router.
 *
 * For more info see the options interface: {@link ExpressApp}
 *
 */
export const server = (options: ExpressApp) => {
    const config: ExpressApp = {
        useSentryMiddleware: false,
        ...options,
    };

    const {
        logger,
        router,
        middleware: {
            preRequest: providedPreMiddleware = [],
            postRequest: providedPostMiddleware = [],
            specificallyOrdered,
        },
    } = config;

    const activeMiddleware = {
        ...getDefaultAppMiddleware(logger),
        ...specificallyOrdered,
    };

    const preMiddleware: MiddlewareDef[] = [
        config.useSentryMiddleware && Sentry.Handlers.requestHandler,
        activeMiddleware.urlParser,
        activeMiddleware.rateLimiter,
        activeMiddleware.bodyParser,
        activeMiddleware.logRequest,
        ...providedPreMiddleware,
    ];

    const postMiddleware: MiddlewareDef[] = [
        config.useSentryMiddleware && Sentry.Handlers.errorHandler,
        ...providedPostMiddleware,
        activeMiddleware.notFoundHandler,
        activeMiddleware.errorHandler,
    ];

    const onlyValidPreMiddleware = preMiddleware.filter(
        Boolean,
    ) as ValidMiddleware[];

    const onlyValidPostMiddleware = postMiddleware.filter(
        Boolean,
    ) as ValidMiddleware[];

    return express()
        .use(...onlyValidPreMiddleware)
        .use('/', router)
        .use(...onlyValidPostMiddleware);
};
