import bodyParser from 'body-parser';
import { ErrorRequestHandler, Handler, Request, Router } from 'express';
export interface IExpressApp {
    logger: ILogger;
    router: Router;
    middlewares?: {
        rateLimiter?: Handler;
        logRequest?: Handler;
        notFoundHandler?: Handler;
        errorHandler?: ErrorRequestHandler;
    };
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
export interface IBasicAppRequest<T extends IBasicUser> extends Request {
    user: T;
}
declare type LoggerMsg = string | object | Error;
export interface ILogger {
    fatal: (msg: LoggerMsg, ...args: any[]) => void;
    error: (msg: LoggerMsg, ...args: any[]) => void;
    warn: (msg: LoggerMsg, ...args: any[]) => void;
    info: (msg: LoggerMsg, ...args: any[]) => void;
    debug: (msg: LoggerMsg, ...args: any[]) => void;
    trace: (msg: LoggerMsg, ...args: any[]) => void;
}
export {};
