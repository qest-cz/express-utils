import { Handler, NextFunction } from 'express';
import * as RateLimit from 'express-rate-limit';
import { RateLimiterConfig } from './interfaces';

export const rateLimiter = (settings?: RateLimiterConfig): Handler => {
    if (!settings?.enabled) {
        return (_, __, next: NextFunction) => next();
    }
    const { max, windowMs } = settings;
    return new RateLimit({ windowMs, max });
};
