import { Handler } from 'express';
import { ILogger } from '../../interfaces';

export const logRequest = (logger: ILogger): Handler => (req, res, next) => {
    const time = new Date();

    const onFinished = () =>
        logger.debug({
            request: `${req.method} ${req.originalUrl}`,
            status: res.statusCode,
            reqTime: (new Date().getTime() - time.getTime()) / 1000,
        });

    req.on('close', onFinished);
    req.on('end', onFinished);

    return next();
};
