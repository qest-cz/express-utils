import { NextFunction, Request, RequestHandler, Response } from 'express';
import * as rateLimit from 'express-rate-limit';
import { IRateLimiterConfig } from './interfaces';

export const rateLimiter = (settings?: IRateLimiterConfig): RequestHandler => {
    if (!settings.enabled) {
        return (req: Request, res: Response, next: NextFunction) => next();
    }
    const { max, windowMs } = settings;
    return rateLimit({ windowMs, max });
};
