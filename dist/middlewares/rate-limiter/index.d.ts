import { RequestHandler } from 'express';
import { IRateLimiterConfig } from './interfaces';
export declare const rateLimiter: (settings?: IRateLimiterConfig) => RequestHandler<import("express-serve-static-core").ParamsDictionary>;
