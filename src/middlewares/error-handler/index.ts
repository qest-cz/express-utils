import { IHttpError, NotFoundError, UnprocessableEntityError } from '@qest/error-utils';
import { NextFunction, Response } from 'express';
import { INTERNAL_SERVER_ERROR } from 'http-codes';
import { IBasicAppRequest, IBasicUser, ILogger } from '../../interfaces';

const NETWORK_CONNECT_TIMEOUT = 599;

export const errorHandler = (logger: ILogger) => (error: any, req: IBasicAppRequest<IBasicUser>, res: Response, next: NextFunction) => {
    let err = error;

    try {
        if (err.isJoi) {
            const payload = { details: err?.details ?? [] };
            err = new UnprocessableEntityError({ err, payload, message: 'Validation error' });
        }

        err = createHandlerError(err, req);

        if (INTERNAL_SERVER_ERROR <= err.code && err.code <= NETWORK_CONNECT_TIMEOUT) {
            logger.error(err);
        } else if (err instanceof NotFoundError) {
            logger.debug(err);
        } else {
            logger.info(err);
        }

        sendErrorResponse(err, res, next);
    } catch (internalError) {
        logger.fatal(internalError);

        res.status(INTERNAL_SERVER_ERROR).json({
            code: INTERNAL_SERVER_ERROR,
            message: internalError.toString(),
            type: 'error_processing_failure',
        });

        next();
    }
};

export const sendErrorResponse = (error: IHttpError, res: Response, next: NextFunction) => {
    const payload = error.payload || {};
    payload.type = error.type;
    payload.message = error.message;

    res.status(error.code).json(payload);
    next();
};

const createHandlerError = (err: any, req: IBasicAppRequest<IBasicUser>) => {
    const e = err;
    const { headers, query, user, body, path, cookies, ip, url, secure } = req;

    e.user = user;
    e.req = { headers, query, body, cookies, ip, url, path, secure };
    return e;
};
