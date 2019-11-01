import * as httpErrors from '@qest/error-utils';
import { IHandlerError, ILogger } from '@qest/logger-utils';
import { NextFunction, Response } from 'express';
import * as httpCodes from 'http-codes';
import * as _ from 'lodash';
import { IBasicAppRequest, IBasicUser } from '../../interfaces';

const NETWORK_CONNECT_TIMEOUT = 599;

export const errorHandler = (logger: ILogger) => {
    return (error: any, req: IBasicAppRequest<IBasicUser>, res: Response, next: NextFunction) => {
        try {
            let err = error;
            if (err.isJoi) {
                const payload = { details: _.get(err, 'details', []) };
                err = new httpErrors.UnprocessableEntityError({ err, payload, message: 'Validation error' });
            }

            err = createHandlerError(err, req);

            if (err instanceof httpErrors.HttpError === false) {
                logger.fatal(err);
                err = new httpErrors.InternalServerError({ err });
            } else {
                if (httpCodes.INTERNAL_SERVER_ERROR <= err.code && err.code <= NETWORK_CONNECT_TIMEOUT) {
                    logger.error(err);
                } else if (err instanceof httpErrors.NotFoundError) {
                    logger.debug(err);
                } else {
                    logger.info(err);
                }
            }

            sendErrorResponse(err, res, next);
        } catch (newError) {
            logger.fatal(newError);
            res.send({
                code: httpCodes.INTERNAL_SERVER_ERROR,
                message: newError.toString(),
                type: 'error_processing_failure',
            });
            next();
        }
    };
};

export const sendErrorResponse = (error: httpErrors.IHttpError, res: Response, next: NextFunction) => {
    const payload = error.payload;
    payload.type = error.type;
    payload.message = error.message;

    res.status(error.code).json(payload);
    next();
};

const createHandlerError = (err: httpErrors.BaseError<any>, req: IBasicAppRequest<IBasicUser>) => {
    const e: IHandlerError = <any>err;
    const { headers, query, user, body, path, cookies, ip, url, secure } = req;
    e.user = user;
    e.req = {
        headers,
        query,
        body,
        cookies,
        ip,
        url,
        path,
        secure,
    };
    return e;
};
