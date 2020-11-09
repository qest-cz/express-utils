import { ErrorRequestHandler, Handler, Request, Router } from 'express';

export interface ExpressApp {
    /**
     * Adds the Sentry `requestHandler` and `errorHandler` to the express middleware stack
     *
     * For more info about what this will do see the [appropriate documentation](https://docs.sentry.io/platforms/node/guides/express/)
     *
     * @default false
     **/
    useSentryMiddleware?: boolean;
    /**
     * Any express router or app that will be mounted on the root path `/` of the web server.
     *
     * The `preRequest` and `postRequest` middlewares are placed around this router
     */
    router: Router;
    /**
     * Any interface compatible logger.
     * A recommended option is to use the [@qest/logger-utils](https://www.npmjs.com/package/@qest/logger-utils)
     *
     * Note that if your logger is capable of logging errors to Sentry, you probably don't want to enable the `useSentryMiddleware` option
     */
    logger: Logger;
    /**
     * See the documentation for each field
     */
    middleware: {
        /**
         * This middleware will get executed in-order but other middleware might alter the request context beforehand
         *
         * Will be executed before the request is handled by the provided router/app
         */
        preRequest?: Handler[];
        /**
         * This middleware will get executed in-order but other middleware might alter the request context beforehand
         *
         * Will be executed after the request is handled by the provided router/app
         */
        postRequest?: Handler[];
        /**
         * These are some middleware functions that are placed in specific places
         * in the middleware chain and their order cannot be altered.
         *
         * All of these have some sane default implementation provided
         *
         * If you wish to disable the default middleware, you can pass a `null` value to the appropriate property.
         */
        specificallyOrdered?: {
            /** 
             * Default Implementation with sane values
             * 
             * @default Handler 
             **/
            rateLimiter?: Handler | null;
            /** 
             * Default implementation utilizing the provided logger
             * 
             * @default Handler 
             **/
            logRequest?: Handler | null;
            /**
             * Default generic implementation
             * 
             * Handler for normalization of unrecognized routes
             *
             * @default Handler
             **/
            notFoundHandler?: Handler | null;
            /**
             * Default Implementation utilizing the provided logger
             *
             * @default ErrorRequestHandler
             **/
            errorHandler?: ErrorRequestHandler | null;
            /**
             * Default standard implementation utilizing the [body-parser](https://www.npmjs.com/package/body-parser)
             * library with sane defaults
             *
             * @default Handler
             **/
            bodyParser?: Handler | null;
            /**
             * Default Standard implementation utilizing the [body-parser](https://www.npmjs.com/package/body-parser)
             * library with sane defaults
             *
             * @default Handler
             **/
            urlParser?: Handler | null;
        };
    };
}

export interface BasicUser {
    id: any;
    role?: string;
}

export interface BasicAppRequest<T extends BasicUser> extends Request {
    user?: T;
}

type LoggerMsg = string | object | Error;

export interface Logger {
    fatal: (msg: LoggerMsg, ...args: any[]) => void;
    error: (msg: LoggerMsg, ...args: any[]) => void;
    warn: (msg: LoggerMsg, ...args: any[]) => void;
    info: (msg: LoggerMsg, ...args: any[]) => void;
    debug: (msg: LoggerMsg, ...args: any[]) => void;
    trace: (msg: LoggerMsg, ...args: any[]) => void;
}
