import { ILogger } from '@qest/logger-utils';
import { NextFunction, Request, Response } from 'express';
import * as onFinished from 'on-finished';

export const logRequest = (logger: ILogger) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const time = new Date();

        onFinished(req, () => {
            logger.debug({
                request: `${req.method} ${req.originalUrl}`,
                status: res.statusCode,
                reqTime: (new Date().getTime() - time.getTime()) / 1000,
            });
        });

        return next();
    };
};
