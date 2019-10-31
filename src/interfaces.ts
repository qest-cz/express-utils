import { ILogger } from '@qest/logger-utils';
import * as bodyParser from 'body-parser';
import { ErrorRequestHandler, Handler, IRouter, Request } from 'express';

export interface IExpressAppMiddlewareConfig {
    rateLimiter?: Handler;
    logRequest?: Handler;
    notFoundHandler?: Handler;
    errorHandler?: ErrorRequestHandler;
}

export interface IExpressApp {
    logger: ILogger;
    router: IRouter<Handler>;
    middlewares?: IExpressAppMiddlewareConfig;
    preMiddleware?: Handler[];
    postMiddleware?: Handler[];
    bodyParser?: Handler;
    urlParser?: Handler;
}

export interface IExpressConfig {
    useSentry?: boolean;
    useDefaultMiddlewares?: boolean;
    bodyParserOptions?: bodyParser.OptionsUrlencoded;
    urlParserOptions?: bodyParser.OptionsUrlencoded;
}

export interface IBasicUser {
    id: any;
    role?: string;
}

export interface IBasicAppRequest<U extends IBasicUser> extends Request {
    user: U;
}
