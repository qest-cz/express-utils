import { Handler } from 'express';
import * as onFinished from 'on-finished';
import { Logger } from '../../interfaces';

export const logRequest = (logger: Logger): Handler => (
    req,
    res,
    next,
) => {
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
